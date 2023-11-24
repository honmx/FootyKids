import { BadRequestException, Injectable } from '@nestjs/common';
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
// import { createRoleDto } from 'apps/backend/src/users/dto/createRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private usersRepository: typeof User,
    @InjectModel(Role) private rolesRepository: typeof Role
  ) { }

  async getUsers() {
    const users = await this.usersRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUsersWithoutGroup() {
    const users = await this.usersRepository.findAll({ where: { groupId: { [Op.not]: null } } });
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

    if (!newCoach) return new BadRequestException("User hasnt been created");

    const user = await this.getUserByEmail({ email: newCoach.email });

    if (!user) return new BadRequestException("User hasnt been found");

    return user;
  }

  async getUserByEmail(dto: GetUserByEmailDto) {
    const user = await this.usersRepository.findOne({ where: { email: dto.email }, include: { all: true } });
    return user;
  }

  async getUserById(dto: GetUserByIdDto) {
    const user = await this.usersRepository.findOne({ where: { id: dto.id }, include: { all: true } });
    return user;
  }

  async getUsersById(dto: GetUsersByIdDto) {
    const user = await this.usersRepository.findAll({ where: { type: "user", [Op.or]: dto.usersId.map(id => ({ id })) }, include: { all: true } });
    return user;
  }

  async changePassword(dto: ChangePasswordDto) {
    const user = await this.usersRepository.update({ password: dto.password }, { where: { email: dto.email } });
    return user;
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
