import { FileService, hash, pick } from '@app/common';
import { ICoach } from '@app/common/types/ICoach';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCoachDto } from './dto/createCoachDto';
import { lastValueFrom } from "rxjs";

@Injectable()
export class ContentService {
  constructor(
    @Inject("CONTENT") private contentClient: ClientProxy,
    private readonly fileService: FileService
  ) { }

  async getCoaches() {
    const response = await lastValueFrom(this.contentClient.send("get-coaches", {}));
    return response;
  }

  async createCoach(coachDto: CreateCoachDto, photo: Express.Multer.File) {
    const uploadedPhoto = await this.fileService.uploadFile(photo, "coaches", hash(pick<ICoach>(["type", "name", "birth"], coachDto)));
    const response = await lastValueFrom(this.contentClient.send("create-coach", { photo: uploadedPhoto?.Location, ...coachDto }));
    return response;
  }
}
