import { Controller } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreatePlaceDto } from './dto/createPlaceDto';
import { GetPlacesByIdDto } from './dto/getPlacesByIdDto';

@Controller()
export class PlacesController {
  constructor(
    private readonly placesService: PlacesService,
    private readonly rmqService: RmqService
  ) { }

  @MessagePattern("get-places")
  async getPlaces(@Ctx() context: RmqContext) {
    const response = await this.placesService.getPlaces();
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("get-places-by-id")
  async getPlacesById(@Payload() dto: GetPlacesByIdDto, @Ctx() context: RmqContext) {
    const response = await this.placesService.getPlacesById(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("create-place")
  async createPlace(@Payload() dto: CreatePlaceDto, @Ctx() context: RmqContext) {
    const response = await this.placesService.createPlace(dto);
    this.rmqService.ack(context);
    return response;
  }
}
