import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  
  const rmqService = app.get<RmqService>(RmqService, { strict: false });

  app.connectMicroservice(rmqService.getOptions("AUTH"));

  app.startAllMicroservices();
}
bootstrap();
