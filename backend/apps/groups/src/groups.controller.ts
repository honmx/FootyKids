import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateGroupDto } from './dto/createGroupDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { DeleteGroupDto } from './dto/deleteGroupDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';
import { GetGroupByIdDto } from './dto/getGroupByIdDto';

@Controller()
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly rmqService: RmqService
  ) { }

  @MessagePattern("get-groups")
  async getGroups(@Ctx() context: RmqContext) {
    const response = await this.groupsService.getGroups();
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-group-by-id")
  async getGroupById(@Payload() dto: GetGroupByIdDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.getGroupById(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-group")
  async createGroups(@Payload() dto: CreateGroupDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.createGroup(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("change-group-name")
  async changeGroupName(@Payload() dto: ChangeGroupNameDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.changeGroupName(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("delete-group")
  async deleteGroup(@Payload() dto: DeleteGroupDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.deleteGroup(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("add-children")
  async addChildren(@Payload() dto: AddChildrenDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.addChildren(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-schedule")
  async createSchedule(@Payload() dto: CreateScheduleDto, @Ctx() context: RmqContext) {
    const response = await this.groupsService.createSchedule(dto);
    this.rmqService.ack(context);
    return response;
  }
}
