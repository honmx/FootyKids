import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateUserDto } from './dto/createUserDto';
import { checkEmailExistanceDto } from './dto/checkEmailExistanceDto';
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
  createUser(@Payload() dto: CreateUserDto, @Ctx() context: RmqContext) {
    const response = this.usersService.createUser(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("check-email-existance")
  checkEmailExistance(@Payload() dto: checkEmailExistanceDto, @Ctx() context: RmqContext) {
    const response = this.usersService.checkEmailExistance(dto);
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
