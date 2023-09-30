import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { createRoleDto } from './dto/createRoleDto';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("/")
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post("/user")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // @Post("/role")
  // createRole(@Body() createRoleDto: createRoleDto) {
  //   return this.usersService.createRole(createRoleDto);
  // }
}
