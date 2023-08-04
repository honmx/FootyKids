import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoachesModule } from './coaches/coaches.module';
import { CoachesController } from './coaches/coaches.controller';
import { CoachesService } from './coaches/coaches.service';
import { Coach } from './coaches/coaches.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "footykids",
      models: [Coach],
      autoLoadModels: true
    }),
    RmqModule,
    CoachesModule,
  ],
  controllers: [],
  providers: [],
})
export class ContentModule { }
