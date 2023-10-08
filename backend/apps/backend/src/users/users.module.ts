import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({ name: "USERS" }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: []
})
export class UsersModule {}
