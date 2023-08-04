import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateCoachDto } from './dto/createCoachDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("content")
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Get("/coaches")
  getCoaches() {
    return this.contentService.getCoaches();
  }

  @Post("/coach")
  @UseInterceptors(FileInterceptor("photo"))
  createCoach(
    @UploadedFile() photo: Express.Multer.File,
    @Body() coachDto: CreateCoachDto
  ) {
    return this.contentService.createCoach(coachDto, photo);
  }
}
