import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateGroupDto } from './dto/createGroupDto';
import { ChangeGroupNameDto } from './dto/changeGroupNameDto';
import { AddChildrenDto } from './dto/addChildrenDto';
import { CreateScheduleDto } from './dto/createScheduleDto';

@Injectable()
export class GroupsService {
  constructor(
    @Inject("GROUPS") private groupsClient: ClientProxy
  ) { }

  async getGroups() {
    const response = await lastValueFrom(this.groupsClient.send("get-groups", {}));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async getGroupById(id: number) {
    const response = await lastValueFrom(this.groupsClient.send("get-group-by-id", { id }));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async createGroup(createGroupDto: CreateGroupDto) {
    const response = await lastValueFrom(this.groupsClient.send("create-group", createGroupDto));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async changeGroupName(id: number, changeGroupNameDto: ChangeGroupNameDto) {
    const response = await lastValueFrom(this.groupsClient.send("change-group-name", { id, ...changeGroupNameDto }));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async deleteGroup(id: number) {
    const response = await lastValueFrom(this.groupsClient.send("delete-group", { id }));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async addChildren(id: number, addChildrenDto: AddChildrenDto) {
    const response = await lastValueFrom(this.groupsClient.send("add-children", { id, ...addChildrenDto }));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async createSchedule(id: number, createScheduleDto: CreateScheduleDto) {
    const response = await lastValueFrom(this.groupsClient.send("create-schedule", { id, ...createScheduleDto }));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }
}
