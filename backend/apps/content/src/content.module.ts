import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoachesModule } from './coaches/coaches.module';
import { Coach } from './coaches/coaches.model';
import { NewsModule } from './news/news.module';
import { News } from './news/news.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST, // database
      port: 5432,
      username: process.env.POSTGRES_USER, // postgres
      password: process.env.POSTGRES_PASSWORD, // postgres
      database: process.env.POSTGRES_DATABASE, // footykids
      models: [Coach, News],
      autoLoadModels: true
    }),
    RmqModule,
    CoachesModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class ContentModule { }
