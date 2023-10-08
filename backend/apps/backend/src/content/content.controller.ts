import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateCoachDto } from './dto/createCoachDto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateNewsDto } from './dto/createNewsDto';

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

  @Get("/news")
  getNews() {
    return this.contentService.getNews();
  }

  @Post("/news")
  @UseInterceptors(FilesInterceptor("photos"))
  createNews(
    @UploadedFiles() photos: Express.Multer.File[],
    @Body() newsDto: CreateNewsDto
  ) {
    return this.contentService.createNews(newsDto, photos);
  }
}
