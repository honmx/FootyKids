import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GroupsService {
  constructor(
    @Inject("GROUPS") private groupsClient: ClientProxy
  ) {}

  async getGroups() {
    const response = await lastValueFrom(this.groupsClient.send("get-groups", {}));
    return response;
  }
}
