import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { GetUserByEmailDto } from './dto/getUserByEmailDto';
import { Role } from './models/role.model';
import { GetUserByIdDto } from './dto/getUserByIdDto';
import { ChangePasswordDto } from './dto/changePasswordDto';
import { CreateCoachDto } from './dto/createCoachDto';
import { GetUsersByIdDto } from './dto/getUsersByIdDto';
import { Op } from 'sequelize';
import { UploadMedicalDocumentPhotoDto } from './dto/uploadMedicalDocumentPhotoDto';
import { MedicalDocument } from './models/medicalDocument.model';
import { SetMedicalDocumentExpirationDto } from './dto/setMedicalDocumentExpirationDto';
import { UploadInsurancePhotoDto } from './dto/uploadInsurancePhotoDto';
import { Insurance } from './models/insurance.model';
import { SetInsuranceExpirationDto } from './dto/setInsuranceExpirationDto';
import { GetUsersByGroupIdDto } from './dto/getUsersByGroupIdDto';
import { Group } from 'apps/groups/src/models/group.model';
import { PersonTraining } from 'apps/groups/src/models/personTraining.model';
import { RemoveGroupDto } from './dto/removeGroupDto';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
// import { createRoleDto } from 'apps/backend/src/users/dto/createRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private usersRepository: typeof User,
    @InjectModel(Role) private rolesRepository: typeof Role,
    @InjectModel(MedicalDocument) private medicalDocumentsRepository: typeof MedicalDocument,
    @InjectModel(Insurance) private insurancesRepository: typeof Insurance,
  ) { }

  async getUsers() {
    const users = await this.usersRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUsersWithoutGroup() {
    const users = await this.usersRepository.findAll({
      where: { [Op.and]: { type: "user", groupId: { [Op.eq]: null } } },
      attributes: ["id", "name", "photo", "birth"]
    });
    return users;
  }

  async createUser(dto: CreateUserDto) {
    const newUser = await this.usersRepository.create({ ...dto, type: "user" });
    const role = await this.rolesRepository.findOne({ where: { value: "USER" } });

    if (!newUser) return new BadRequestException("User hasnt been created");
    if (!role) return new BadRequestException("Role hasnt been found");

    await newUser.$set("role", role.id);

    const user = await this.getUserByEmail({ email: newUser.email });

    if (!user) return new BadRequestException("User hasnt been found");

    return user;
  }

  async createCoach(dto: CreateCoachDto) {
    const newCoach = await this.usersRepository.create({ ...dto, type: "coach" });

    if (!newCoach) {
      return new BadRequestException("User hasnt been created");
    }

    const user = await this.getUserByEmail({ email: newCoach.email });

    if (!user) {
      return new BadRequestException("User hasnt been found");
    }

    return user;
  }

  async getUserByEmail(dto: GetUserByEmailDto) {
    const user = await this.usersRepository.findOne({ where: { email: dto.email }, include: { all: true } });
    return user;
  }

  async getUserById(dto: GetUserByIdDto) {
    const user = await this.usersRepository.findOne({
      where: { id: dto.id },
      include: { all: true }
    });
    return user;
  }

  async getUsersById(dto: GetUsersByIdDto) {
    const user = await this.usersRepository.findAll({ where: { type: "user", [Op.or]: dto.usersId.map(id => ({ id })) } });
    return user;
  }

  async getUsersByGroupId(dto: GetUsersByGroupIdDto) {
    const users = await this.usersRepository.findAll({
      where: { groupId: dto.groupId },
      include: [
        { model: Group },
        { model: MedicalDocument },
        { model: Insurance },
      ]
    });
    return users;
  }

  async changePassword(dto: ChangePasswordDto) {
    const user = await this.usersRepository.update({ password: dto.password }, { where: { email: dto.email } });
    return user;
  }

  async removeGroup(dto: RemoveGroupDto) {
    const user = await this.usersRepository.findOne({ where: { id: dto.id } });

    if (!user) {
      return new BadRequestException("Такого пользователя не существует");
    }

    await this.usersRepository.update({ groupId: null }, { where: { id: dto.id } });

    const participants = await this.getUsersByGroupId({ groupId: user.groupId });
    return participants;
  }

  async getMedicalDocumentByUserId(userId: number) {
    const medicalDocument = await this.medicalDocumentsRepository.findOne({ where: { userId } });
    return medicalDocument;
  }

  async uploadMedicalDocumentPhoto(dto: UploadMedicalDocumentPhotoDto) {
    const user = await this.getUserById({ id: dto.id });

    if (!user) {
      return new BadRequestException("Такого пользователя не существует");
    }

    await this.medicalDocumentsRepository.destroy({ where: { userId: dto.id } });

    const medicalDocument = await this.medicalDocumentsRepository.create({ photo: dto.photo });

    await user.$set("medicalDocument", medicalDocument.id);

    return medicalDocument;
  }

  async setMedicalDocumentExpiration(dto: SetMedicalDocumentExpirationDto) {
    const user = await this.getUserById({ id: dto.id });

    if (!user) {
      return new BadRequestException("Такого пользователя не существует");
    }

    const medicalDocumentFromDb = await this.medicalDocumentsRepository.findOne({ where: { userId: dto.id } });

    if (medicalDocumentFromDb) {
      await this.medicalDocumentsRepository.update({ expires: dto.expires }, { where: { userId: dto.id } });
      return await this.getMedicalDocumentByUserId(dto.id);
    }

    const medicalDocument = await this.medicalDocumentsRepository.create({ expires: dto.expires });

    user.$set("medicalDocument", medicalDocument.id);

    return medicalDocument;
  }

  async getInsuranceByUserId(userId: number) {
    const insurance = await this.insurancesRepository.findOne({ where: { userId } });
    return insurance;
  }

  async uploadInsurancePhoto(dto: UploadInsurancePhotoDto) {
    const user = await this.getUserById({ id: dto.id });

    if (!user) {
      return new BadRequestException("Такого пользователя не существует");
    }

    await this.insurancesRepository.destroy({ where: { userId: dto.id } });

    const insurance = await this.insurancesRepository.create({ photo: dto.photo });

    await user.$set("insurance", insurance.id);

    return insurance;
  }

  async setInsuranceExpiration(dto: SetInsuranceExpirationDto) {
    const user = await this.getUserById({ id: dto.id });

    if (!user) {
      return new BadRequestException("Такого пользователя не существует");
    }

    const insuranceFromDb = await this.insurancesRepository.findOne({ where: { userId: dto.id } });

    if (insuranceFromDb) {
      await this.insurancesRepository.update({ expires: dto.expires }, { where: { userId: dto.id } });
      return await this.getInsuranceByUserId(dto.id);
    }

    const insurance = await this.insurancesRepository.create({ expires: dto.expires });

    user.$set("insurance", insurance.id);

    return insurance;
  }

  // async getRoleByValue(value: string) {
  //   const role = await this.rolesRepository.findOne({ where: { value } });
  //   return role;
  // }

  // async createRole(dto: createRoleDto) {
  //   const user = await this.rolesRepository.create(dto);
  //   return user;
  // }
}
