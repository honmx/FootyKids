import { Controller, Get } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller()
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  getHello(): string {
    return this.placesService.getHello();
  }
}
