import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { JwtAuthGuard } from '@app/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SetMedicalDocumentExpirationDto } from './dto/setMedicalDocumentExpirationDto';
import { SetInsuranceExpirationDto } from './dto/setInsuranceExpirationDto';
import { ChangeGroupDto } from './dto/changeGroupDto';
import { ChangeRoleDto } from './dto/changeRoleDto';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get("/")
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get("/withoutGroup")
  async getUsersWithoutGroup() {
    return await this.usersService.getUsersWithoutGroup();
  }

  @Get("/coachRoles")
  async getCoachRoles() {
    return await this.usersService.getCoachRoles();
  }

  @Get("/:id")
  async getUserById(@Param("id") id: number) {
    return await this.usersService.getUserById(id);
  }

  @Post("/user")
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Patch(":id/removeGroup")
  async removeGroup(@Param("id") id: number) {
    return await this.usersService.removeGroup(id);
  }

  @Patch(":id/changeGroup")
  async changeGroup(@Body() changeGroupDto: ChangeGroupDto, @Param("id") id: number) {
    return await this.usersService.changeGroup(id, changeGroupDto);
  }
  
  @Patch(":id/changeRole")
  async changeRole(@Body() changeRoleDto: ChangeRoleDto, @Param("id") id: number) {
    return await this.usersService.changeRole(id, changeRoleDto);
  }

  @Patch(":id/deleteRole")
  async deleteRole(@Param("id") id: number) {
    return await this.usersService.deleteRole(id);
  }

  @Patch(":id/uploadMedicalDocumentPhoto")
  @UseInterceptors(FileInterceptor("photo"))
  async uploadMedicalDocumentPhoto(@Param("id") id: number, @UploadedFile() photo: Express.Multer.File) {
    return await this.usersService.uploadMedicalDocumentPhoto(id, photo);
  }

  @Patch(":id/setMedicalDocumentExpiration")
  async setMedicalDocumentExpiration(@Body() setMedicalDocumentExpirationDto: SetMedicalDocumentExpirationDto, @Param("id") id: number) {
    return await this.usersService.setMedicalDocumentExpiration(id, setMedicalDocumentExpirationDto);
  }

  @Patch(":id/uploadInsurancePhoto")
  @UseInterceptors(FileInterceptor("photo"))
  async uploadInsurancePhoto(@Param("id") id: number, @UploadedFile() photo: Express.Multer.File) {
    return await this.usersService.uploadInsurancePhoto(id, photo);
  }

  @Patch(":id/setInsuranceExpiration")
  async setInsuranceExpiration(@Body() setInsuranceExpirationDto: SetInsuranceExpirationDto, @Param("id") id: number) {
    return await this.usersService.setInsuranceExpiration(id, setInsuranceExpirationDto);
  }

  // @Post("/role")
  // createRole(@Body() createRoleDto: createRoleDto) {
  //   return this.usersService.createRole(createRoleDto);
  // }
}
