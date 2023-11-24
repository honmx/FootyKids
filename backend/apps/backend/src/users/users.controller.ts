import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { JwtAuthGuard } from '@app/common';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("/")
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get("/withoutGroup")
  async getUsersWithoutGroup() {
    return await this.usersService.getUsersWithoutGroup();
  }

  @Post("/user")
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  // @Post("/role")
  // createRole(@Body() createRoleDto: createRoleDto) {
  //   return this.usersService.createRole(createRoleDto);
  // }
}
