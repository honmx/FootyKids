import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_USERS_PORT),
      username: process.env.POSTGRES_USERS_USER,
      password: process.env.POSTGRES_USERS_PASSWORD,
      database: process.env.POSTGRES_USERS_DB,
      // models: [Coach, News],
      autoLoadModels: true
    }),
    RmqModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
