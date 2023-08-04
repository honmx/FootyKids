import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { FileModule, FileService, RmqModule } from '@app/common';
import { ContentModule } from 'apps/content/src/content.module';

@Module({
  imports: [
    RmqModule.register({ name: "CONTENT" }),
    ContentModule,
    FileModule,
  ],
  controllers: [ContentController],
  providers: [ContentService, FileService],
  exports: []
})
export class ContentProducerModule { }
