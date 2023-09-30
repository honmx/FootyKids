import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RmqModule, RmqService } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './auth.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_AUTH_PORT),
      username: process.env.POSTGRES_AUTH_USER,
      password: process.env.POSTGRES_AUTH_PASSWORD,
      database: process.env.POSTGRES_AUTH_DB,
      models: [Auth],
      autoLoadModels: true
    }),
    SequelizeModule.forFeature([Auth]),
    RmqModule,
    RmqModule.register({ name: "USERS" }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
