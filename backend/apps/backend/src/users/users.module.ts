import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RmqModule } from '@app/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    RmqModule.register({ name: "USERS" }),
    JwtModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: []
})
export class UsersModule {}
