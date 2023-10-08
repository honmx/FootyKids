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
    return await lastValueFrom(this.usersClient.send("get-users", {}));
  }

  async createUser(createUserDto: CreateUserDto) {
    return await lastValueFrom(this.usersClient.send("create-user", createUserDto));
  }

  // async createRole(createRoleDto: createRoleDto) {
  //   return await lastValueFrom(this.usersClient.send("create-role", createRoleDto));
  // }
}
