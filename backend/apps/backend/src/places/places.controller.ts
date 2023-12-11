import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/createPlaceDto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("places")
export class PlacesController {
  constructor(private readonly placesService: PlacesService) { }

  @Get("/")
  async getPlaces() {
    return await this.placesService.getPlaces();
  }

  @Post("/")
  @UseInterceptors(FileInterceptor("photo"))
  async createPlace(@Body() createPlaceDto: CreatePlaceDto, @UploadedFile() photo: Express.Multer.File) {
    return await this.placesService.createPlace(createPlaceDto, photo);
  }
}
