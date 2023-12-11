import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './models/place.model';
import { CreatePlaceDto } from './dto/createPlaceDto';
import { GetPlacesByIdDto } from './dto/getPlacesByIdDto';
import { Op } from 'sequelize';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place) private placesRepository: typeof Place,
  ) { }

  async getPlaces() {
    const places = await this.placesRepository.findAll({ include: { all: true } });
    return places;
  }

  async getPlacesById(dto: GetPlacesByIdDto) {
    const places = await this.placesRepository.findAll({ where: { [Op.or]: dto.placesId.map(id => ({ id })) }, include: { all: true } });
    return places;
  }

  async createPlace(dto: CreatePlaceDto) {
    const place = await this.placesRepository.create(dto, { include: { all: true } });
    return place;
  }
}
