import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HelpersModule, RmqModule, RmqService } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './auth.model';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';

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
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_SMTP_HOST,
        port: process.env.MAIL_SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_SMTP_USER,
          pass: process.env.MAIL_SMTP_PASSWORD
        }
      }
    }),
    JwtModule,
    HelpersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
