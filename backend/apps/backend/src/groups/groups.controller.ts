import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/createGroupDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';
import { CreateTrainingDto } from './dto/createTrainingDto';
import { GetCurrentScheduleDto } from './dto/getCurrentScheduleDto';
import { ChangeTrainingDto } from './dto/changeTrainingDto';
import { DeleteTrainingDto } from './dto/deleteTrainingDto';
import { MarkAttendanceDto } from './dto/markAttendanceDto';

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) { }

  @Get("/")
  async getGroups() {
    return await this.groupsService.getGroups();
  }

  @Get("/:id")
  async getGroupById(@Param("id") id: number) {
    return await this.groupsService.getGroupById(id);
  }

  @Get("/group/:name")
  async getGroupByName(@Param("name") name: string) {
    return await this.groupsService.getGroupByName(name);
  }

  @Post("/")
  async createGroup(@Body() createGroupDto: CreateGroupDto) {
    return await this.groupsService.createGroup(createGroupDto);
  }

  @Patch("/:id/changeName")
  async changeGroupName(@Body() changeGroupNameDto: ChangeGroupNameDto, @Param("id") id: number) {
    return await this.groupsService.changeGroupName(id, changeGroupNameDto);
  }

  @Delete("/:id")
  async deleteGroup(@Param("id") id: number) {
    return await this.groupsService.deleteGroup(id);
  }

  @Patch("/:id/addChildren")
  async addChildren(@Body() addChildrenDto: AddChildrenDto, @Param("id") id: number) {
    return await this.groupsService.addChildren(id, addChildrenDto);
  }

  @Get("/:id/getCurrentSchedule/:year/:month")
  async getCurrentSchedule(
    @Param("id") id: number,
    @Param("year") year: string,
    @Param("month") month: string
  ) {
    return await this.groupsService.getCurrentSchedule({ id, month: Number(month), year: Number(year) });
  }

  @Patch("/:id/createSchedule")
  async createSchedule(@Body() createScheduleDto: CreateScheduleDto, @Param("id") id: number) {
    return await this.groupsService.createSchedule(id, createScheduleDto);
  }

  @Patch("/:id/createTraining")
  async createTraining(@Body() createTrainingDto: CreateTrainingDto, @Param("id") id: number) {
    return await this.groupsService.createTraining(id, createTrainingDto);
  }

  @Patch("/:id/changeTraining")
  async changeTraining(@Body() changeTrainingDto: ChangeTrainingDto, @Param("id") id: number) {
    return await this.groupsService.changeTraining(id, changeTrainingDto);
  }

  @Delete("/:id/deleteTraining")
  async deleteTraining(@Body() deleteTrainingDto: DeleteTrainingDto, @Param("id") id: number) {
    return await this.groupsService.deleteTraining(id, deleteTrainingDto);
  }

  @Patch("/:id/markAttendance")
  async markAttendance(@Body() markAttendanceDto: MarkAttendanceDto, @Param("id") id: number) {
    return await this.groupsService.markAttendance(id, markAttendanceDto);
  }
}
