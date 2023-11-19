import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/createGroupDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';

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

  @Post("/")
  async createGroup(@Body() createGroupDto: CreateGroupDto) {
    return await this.groupsService.createGroup(createGroupDto);
  }

  @Patch("/:id")
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

  @Patch("/:id/createSchedule")
  async createSchedule(@Body() createScheduleDto: CreateScheduleDto, @Param("id") id: number) {
    return await this.groupsService.createSchedule(id, createScheduleDto);
  }
}
