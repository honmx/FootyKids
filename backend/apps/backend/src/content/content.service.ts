import { FileService, HelpersService } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCoachDto } from './dto/createCoachDto';
import { lastValueFrom } from "rxjs";

@Injectable()
export class ContentService {
  constructor(
    @Inject("CONTENT") private contentClient: ClientProxy,
    private readonly fileService: FileService,
    private readonly helpersService: HelpersService
  ) { }

  async getCoaches() {
    const response = await lastValueFrom(this.contentClient.send("get-coaches", {}));
    return response;
  }

  async createCoach(coachDto: CreateCoachDto, photo: Express.Multer.File) {
    const uploadedPhoto = await this.fileService.uploadFile(
      photo,
      "coaches",
      this.helpersService.hash(this.helpersService.pick(["type", "name", "birth"], coachDto))
    );
    const response = await lastValueFrom(this.contentClient.send("create-coach", { photo: uploadedPhoto.Location, ...coachDto }));
    return response;
  }
}
