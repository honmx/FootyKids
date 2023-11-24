import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { createRoleDto } from './dto/createRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @Inject("USERS") private usersClient: ClientProxy
  ) {}

  async getUsers() {
    const response = await lastValueFrom(this.usersClient.send("get-users", {}));
    return response;
  }

  async getUsersWithoutGroup() {
    const response = await lastValueFrom(this.usersClient.send("get-users-without-group", {}));
    return response;
  }

  async createUser(createUserDto: CreateUserDto) {
    const response = await lastValueFrom(this.usersClient.send("create-user", createUserDto));
    return response;
  }

  // async createRole(createRoleDto: createRoleDto) {
  //   return await lastValueFrom(this.usersClient.send("create-role", createRoleDto));
  // }
}
