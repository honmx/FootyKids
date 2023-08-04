import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RmqService } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const rmqService = app.get<RmqService>(RmqService, { strict: false });

  app.connectMicroservice(rmqService.getOptions("CONTENT"));
  
  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservices();
  
  await app.listen(5000, () => {
    console.log("api gateway listening on 5000");
  });
}
bootstrap();
