import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class GroupsService {
  constructor(
    // @InjectModel(User) private usersRepository: typeof User
  ) { }

  async getGroups() {
    return 'Hello World!';
  }
}
