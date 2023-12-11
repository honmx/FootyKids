import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateGroupDto } from './dto/createGroupDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { DeleteGroupDto } from './dto/deleteGroupDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';
import { GetGroupByIdDto } from './dto/getGroupByIdDto';
import { CreateTrainingDto } from './dto/createTrainingDto';
import { GetCurrentScheduleDto } from './dto/getCurrentScheduleDto';
import { ChangeTrainingDto } from './dto/changeTrainingDto';
import { DeleteTrainingDto } from './dto/deleteTrainingDto';
import { MarkAttendanceDto } from './dto/markAttendanceDto';
import { User } from 'apps/users/src/models/user.model';
import { Schedule } from './models/schedule.model';
import { TrainingByDayOfTheWeek } from './models/trainingByDayOfTheWeek.model';
import { TrainingByDay } from './models/trainingByDay.model';
import { GetGroupByNameDto } from './dto/getGroupByNameDto';

@Controller()
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly rmqService: RmqService
  ) { }

  @MessagePattern("get-groups")
  async getGroups(@Ctx() context: RmqContext) {
    const response = await this.groupsService.getGroups();
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-group-by-id")
  async getGroupById(@Payload() dto: GetGroupByIdDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.getGroupById(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-group-by-name")
  async getGroupByName(@Payload() dto: GetGroupByNameDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.getGroupByName(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-group")
  async createGroups(@Payload() dto: CreateGroupDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.createGroup(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("change-group-name")
  async changeGroupName(@Payload() dto: ChangeGroupNameDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.changeGroupName(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("delete-group")
  async deleteGroup(@Payload() dto: DeleteGroupDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.deleteGroup(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("add-children")
  async addChildren(@Payload() dto: AddChildrenDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.addChildren(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-current-schedule")
  async getCurrentSchedule(@Payload() dto: GetCurrentScheduleDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.getCurrentSchedule(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-schedule")
  async createSchedule(@Payload() dto: CreateScheduleDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.createSchedule(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-training")
  async createTraining(@Payload() dto: CreateTrainingDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.createTraining(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("change-training")
  async changeTraining(@Payload() dto: ChangeTrainingDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.changeTraining(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("delete-training")
  async deleteTraining(@Payload() dto: DeleteTrainingDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.deleteTraining(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("mark-attendance")
  async markAttendance(@Payload() dto: MarkAttendanceDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.markAttendance(dto);
    this.rmqService.ack(context);
    return response;
  }
}
