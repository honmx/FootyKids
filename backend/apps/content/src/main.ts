import { NestFactory } from "@nestjs/core";
import { ContentModule } from "./content.module";

async function bootstrap() {
  const app = await NestFactory.create(ContentModule);
  app.startAllMicroservices();
}

bootstrap();
