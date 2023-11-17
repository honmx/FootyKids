import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

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
}
