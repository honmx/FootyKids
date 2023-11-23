import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './models/group.model';
import { CreateGroupDto } from './dto/createGroupDto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { GetGroupByNameDto } from './dto/getGroupByNameDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { DeleteGroupDto } from './dto/deleteGroupDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';
import { ITrainingByDayOfTheWeek } from './types/ITrainingByDayOfTheWeek';
import { ITrainingByDay } from './types/ITrainingByDay';
import { TrainingByDayOfTheWeek } from './models/trainingByDayOfTheWeek.model';
import { TrainingByDay } from './models/trainingByDay.model';
import { IPlace } from './types/IPlace';
import { IPlaceWithId } from './types/IPlaceWithId';
import { Schedule } from './models/schedule.model';
import { GetGroupByIdDto } from './dto/getGroupByIdDto';
import { CreateTrainingDto } from './dto/createTrainingDto';
import { GetCurrentScheduleDto } from './dto/getCurrentScheduleDto';
import { FindOptions, Includeable, Op } from 'sequelize';
import { ChangeTrainingDto } from './dto/changeTrainingDto';
import { DeleteTrainingDto } from './dto/deleteTrainingDto';
import { MarkAttendanceDto } from './dto/markAttendanceDto';
import { PersonTraining } from './models/personTraining.model';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group) private groupsRepository: typeof Group,
    @InjectModel(TrainingByDayOfTheWeek) private trainingsByDayOfTheWeekRepository: typeof TrainingByDayOfTheWeek,
    @InjectModel(TrainingByDay) private trainingsByDayRepository: typeof TrainingByDay,
    @InjectModel(Schedule) private scheduleRepository: typeof Schedule,
    @InjectModel(PersonTraining) private personTrainingsRepository: typeof PersonTraining,
    @Inject("USERS") private usersClient: ClientProxy,
    @Inject("PLACES") private placesClient: ClientProxy,
  ) { }

  async getGroups() {
    const groups = await this.groupsRepository.findAll({ include: { all: true } });
    return groups;
  }

  async getGroupByName(dto: GetGroupByNameDto) {
    const group = await this.groupsRepository.findOne({ where: { name: dto.name } });
    return group;
  }

  async getGroupById(dto: GetGroupByIdDto, include?: Includeable) {
    const group = await this.groupsRepository.findOne({ where: { id: dto.id }, include: include || { all: true, nested: true } });
    return group;
  }

  async createGroup(dto: CreateGroupDto) {
    const group = await this.getGroupByName({ name: dto.name });

    if (group) {
      return new BadRequestException("Группа с таким названием уже существует");
    }

    const newGroup = await this.groupsRepository.create(dto, { include: { all: true } });

    if (dto.participantsId?.length == 0) return newGroup;

    const users = await lastValueFrom(this.usersClient.send("get-users-by-id", { usersId: dto.participantsId }));
    await newGroup.$set("participants", users.map(user => user.id));

    return newGroup;
  }

  async changeGroupName(dto: ChangeGroupNameDto) {
    const group = await this.groupsRepository.update({ name: dto.name }, { where: { id: dto.id } });
    return group;
  }

  async deleteGroup(dto: DeleteGroupDto) {
    const group = await this.groupsRepository.destroy({ where: { id: dto.id } });
    return group;
  }

  async addChildren(dto: AddChildrenDto) {
    const group = await this.groupsRepository.findOne({ where: { id: dto.id } });

    if (!group) {
      return new BadRequestException("Такой группы не существует");
    }

    const users = await lastValueFrom(this.usersClient.send("get-users-by-id", { usersId: dto.childrenId }));
    await group.$add("participants", users.map(user => user.id));

    return group;
  }

  async getCurrentSchedule(dto: GetCurrentScheduleDto) {
    const { id, month, year } = dto;

    const previousMonth = month - 1 === 0
      ? `12.${year - 1}`
      : `${month - 1}.${year}`;

    const currentMonth = `${month}.${year}`;

    const nextMonth = month + 1 === 13
      ? `01.${year + 1}`
      : `${month + 1}.${year}`;

    const schedule = await this.scheduleRepository.findAll({
      where: {
        [Op.and]: [
          { groupId: id },
          { [Op.or]: [{ date: previousMonth }, { date: currentMonth }, { date: nextMonth }] }
        ]
      },
      include: { all: true, nested: true }
    });

    return schedule;
  }

  async createSchedule(dto: CreateScheduleDto) {
    const group = await this.getGroupById({ id: dto.id });

    if (!group) {
      return new BadRequestException("Такой группы не существует");
    }

    const scheduleFromDb = await this.getScheduleByGroupIdAndDate(dto.id, dto.date);

    if (scheduleFromDb) {
      await this.trainingsByDayOfTheWeekRepository.destroy({ where: { scheduleId: scheduleFromDb.id } });
      await this.trainingsByDayRepository.destroy({ where: { scheduleId: scheduleFromDb.id } });
      await this.scheduleRepository.destroy({ where: { id: scheduleFromDb.id } });
    }

    const [month, year] = dto.date.split(".");
    const datesArray = this.getDatesArray(Number(month), Number(year));

    const trainingsByDayOfTheWeek = await this.createTrainingsByDayOfTheWeek(dto.trainingsByDayOfTheWeek);
    const trainingsByDay = await this.createTrainingsByDay(dto.trainingsByDayOfTheWeek, datesArray);
    const schedule = await this.scheduleRepository.create({ date: dto.date }, { include: { all: true } });

    await schedule.$set("trainingsByDayOfTheWeek", trainingsByDayOfTheWeek.map(training => training.id));
    await schedule.$set("trainingsByDay", trainingsByDay.map(training => training.id));

    await group.$add("schedule", schedule.id);

    return await this.getCurrentSchedule({ id: dto.id, month: Number(month), year: Number(year) });
  }

  async getScheduleByGroupIdAndDate(groupId: number, date: string) {
    const schedule = await this.scheduleRepository.findOne({ where: { groupId, date }, include: { all: true, nested: true } });
    return schedule;
  }

  async createTrainingsByDay(trainingsByDayOfTheWeekObjects: ITrainingByDayOfTheWeek[], datesArray: Date[]) {
    const trainingsByDayObjects = this.getTrainingsByDayObjectsArray(datesArray, trainingsByDayOfTheWeekObjects);

    // const trainingsByDayOfTheWeek = await this.trainingsByDayRepository.findAll({ include: { all: true } });
    const trainingsByDayOfTheWeek = await this.trainingsByDayRepository.bulkCreate(trainingsByDayObjects, { include: { all: true } });
    return trainingsByDayOfTheWeek;
  }

  async createTrainingsByDayOfTheWeek(trainingsByDayOfTheWeekObjects: ITrainingByDayOfTheWeek[]) {
    // const trainingsByDayOfTheWeek = await this.trainingsByDayOfTheWeekRepository.findAll({ include: { all: true } });
    const trainingsByDayOfTheWeek = await this.trainingsByDayOfTheWeekRepository.bulkCreate(trainingsByDayOfTheWeekObjects, { include: { all: true } });
    return trainingsByDayOfTheWeek;
  }

  async createTraining(dto: CreateTrainingDto) {
    const { id, ...restDto } = dto;

    const [day, month, year] = dto.date.split(".");

    const schedule = await this.getScheduleByGroupIdAndDate(id, `${month}.${year}`);

    const trainingFromDb = await this.trainingsByDayRepository.findOne({ where: { scheduleId: schedule.id, date: dto.date }, include: { all: true } });

    if (trainingFromDb) {
      return new BadRequestException("Такая тренировка уже существует");
    }

    const training = await this.trainingsByDayRepository.create(restDto, { include: { all: true } });

    await schedule.$add("trainingsByDay", [training.id]);

    return await this.getCurrentSchedule({ id, month: Number(month), year: Number(year) });
  }

  async changeTraining(dto: ChangeTrainingDto) {
    const { id, ...restDto } = dto;

    const [day, month, year] = dto.date.split(".");

    const schedule = await this.getScheduleByGroupIdAndDate(id, `${month}.${year}`);

    await this.trainingsByDayRepository.update(restDto, { where: { scheduleId: schedule.id, date: dto.date } });

    return await this.getCurrentSchedule({ id, month: Number(month), year: Number(year) });
  }

  async deleteTraining(dto: DeleteTrainingDto) {
    const { id, date } = dto;

    const [day, month, year] = date.split(".");

    const schedule = await this.getScheduleByGroupIdAndDate(id, `${month}.${year}`);

    await this.trainingsByDayRepository.destroy({ where: { scheduleId: schedule.id, date: dto.date } });

    return await this.getCurrentSchedule({ id, month: Number(month), year: Number(year) });
  }

  async markAttendance(dto: MarkAttendanceDto) {
    const { id, date, attendanceData } = dto;

    const [day, month, year] = date.split(".");

    const schedule = await this.getScheduleByGroupIdAndDate(id, `${month}.${year}`);

    const training = await this.trainingsByDayRepository.findOne({ where: { scheduleId: schedule.id, date: dto.date }, include: { all: true } });

    if (!training) {
      return new BadRequestException("Такой тренировки не существует");
    }

    await this.personTrainingsRepository.destroy({ where: { trainingByDayId: training.id } });

    const personTrainings = await this.personTrainingsRepository.bulkCreate(attendanceData, { include: { all: true } });
    personTrainings.forEach(async (personTraining) => await personTraining.$set("training", training.id));

    return await this.personTrainingsRepository.findAll({ include: { all: true, nested: true } });
  }

  getDatesArray(month: number, year: number) {
    let initialDay = 1;

    const result: Date[] = [];

    while (new Date(Date.UTC(year, month - 1, initialDay)).getMonth() === Number(month) - 1) {
      const date = new Date(Date.UTC(year, month - 1, initialDay++));
      result.push(date);
    }

    return result;
  }

  getTrainingsByDayObjectsArray(datesArray: Date[], trainingsByDayOfTheWeek: ITrainingByDayOfTheWeek[]) {
    const result: ITrainingByDay[] = [];

    datesArray.forEach(date => {
      trainingsByDayOfTheWeek.forEach(trainingByDayOfTheWeek => {
        if (date.getDay() === trainingByDayOfTheWeek.dayOfTheWeek) {
          const trainingByDay = {
            date: date.toLocaleDateString(),
            time: trainingByDayOfTheWeek.time,
            placeId: trainingByDayOfTheWeek.placeId
          }

          result.push(trainingByDay);
        }
      });
    });

    return result;
  }

  // getPlacesId(trainingsByDayOfTheWeek: ITrainingByDayOfTheWeek[]) {
  //   return Array.from(new Set(trainingsByDayOfTheWeek.map(trainingByDayOfTheWeek => trainingByDayOfTheWeek.placeId)));
  // }

  // async getPlacesObject(trainingsByDayOfTheWeek: ITrainingByDayOfTheWeek[]) {
  //   const placesId = this.getPlacesId(trainingsByDayOfTheWeek);
  //   const places: IPlaceWithId[] = await lastValueFrom(this.placesClient.send("get-places-by-id", { placesId }));

  //   const result = {};

  //   places.forEach(place => result[place.id] = place);

  //   return result;
  // }
}
