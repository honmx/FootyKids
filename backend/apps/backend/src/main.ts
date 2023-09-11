import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000",
  });
  
  const rmqService = app.get<RmqService>(RmqService, { strict: false });

  app.connectMicroservice(rmqService.getOptions("CONTENT"));
  
  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservices();
  
  await app.listen(5000, () => {
    console.log("api gateway listening on 5000");
  });
}
bootstrap();
