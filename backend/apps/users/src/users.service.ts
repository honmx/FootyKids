import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { checkEmailExistanceDto } from './dto/checkEmailExistanceDto';
import { Role } from './role.model';
// import { createRoleDto } from 'apps/backend/src/users/dto/createRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private usersRepository: typeof User,
    @InjectModel(Role) private rolesRepository: typeof Role
  ) { }

  async getUsers() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);
    return user;
  }

  async checkEmailExistance(dto: checkEmailExistanceDto) {
    const user = await this.usersRepository.findOne({ where: { email: dto.email } });
    return user;
  }

  // async createRole(dto: createRoleDto) {
  //   const user = await this.rolesRepository.create(dto);
  //   return user;
  // }
}
