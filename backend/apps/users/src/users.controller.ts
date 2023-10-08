import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateUserDto } from './dto/createUserDto';
import { GetUserByEmailDto } from './dto/getUserByEmailDto';
import { GetUserByIdDto } from './dto/getUserByIdDto';
import { ChangePasswordDto } from './dto/changePasswordDto';
// import { createRoleDto } from 'apps/backend/src/users/dto/createRoleDto';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly rmqService: RmqService
  ) { }

  @MessagePattern("get-users")
  getUsers(@Ctx() context: RmqContext) {
    const response = this.usersService.getUsers();
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-user")
  async createUser(@Payload() dto: CreateUserDto, @Ctx() context: RmqContext) {
    const response = await this.usersService.createUser(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-user-by-email")
  async getUserByEmail(@Payload() dto: GetUserByEmailDto, @Ctx() context: RmqContext) {
    const response = await this.usersService.getUserByEmail(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-user-by-id")
  async getUserById(@Payload() dto: GetUserByIdDto, @Ctx() context: RmqContext) {
    const response = await this.usersService.getUserById(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("change-user-password")
  async changeUserPassword(@Payload() dto: ChangePasswordDto, @Ctx() context: RmqContext) {
    const response = await this.usersService.changePassword(dto);
    this.rmqService.ack(context);
    return response;
  }

  // @MessagePattern("create-role")
  // createRoles(@Payload() dto: createRoleDto, @Ctx() context: RmqContext) {
  //   const response = this.usersService.createRole(dto);
  //   this.rmqService.ack(context);
  //   return response;
  // }
}
