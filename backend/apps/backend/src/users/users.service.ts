import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { createRoleDto } from './dto/createRoleDto';
import { FileService, HelpersService } from '@app/common';
import { SetMedicalDocumentExpirationDto } from './dto/setMedicalDocumentExpirationDto';
import { SetInsuranceExpirationDto } from './dto/setInsuranceExpirationDto';
import { ChangeGroupDto } from './dto/changeGroupDto';
import { ChangeRoleDto } from './dto/changeRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @Inject("USERS") private usersClient: ClientProxy,
    private readonly fileService: FileService,
    private readonly helpersService: HelpersService
  ) { }

  async getUsers() {
    const response = await lastValueFrom(this.usersClient.send("get-users", {}));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async getUsersWithoutGroup() {
    const response = await lastValueFrom(this.usersClient.send("get-users-without-group", {}));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async getUserById(id: number) {
    const response = await lastValueFrom(this.usersClient.send("get-user-by-id", { id }));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async createUser(createUserDto: CreateUserDto) {
    const response = await lastValueFrom(this.usersClient.send("create-user", createUserDto));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async removeGroup(id: number) {
    const response = await lastValueFrom(this.usersClient.send("remove-group", { id }));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async changeGroup(id: number, changeGroupDto: ChangeGroupDto) {
    const response = await lastValueFrom(this.usersClient.send("change-group", { id, ...changeGroupDto }));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }
  
  async changeRole(id: number, changeRoleDto: ChangeRoleDto) {
    const response = await lastValueFrom(this.usersClient.send("change-role", { id, ...changeRoleDto }));
  
    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }
  
    return response;
  }
  
  async deleteRole(id: number) {
    const response = await lastValueFrom(this.usersClient.send("delete-role", { id }));
  
    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }
  
    return response;
  }

  async uploadMedicalDocumentPhoto(id: number, photo: Express.Multer.File) {
    const uploadedPhoto = await this.fileService.uploadFile(
      photo,
      "medicalDocuments",
      this.helpersService.hash({ id, value: "Мед.справка" })
    );

    const response = await lastValueFrom(
      this.usersClient.send(
        "upload-medical-document-photo",
        { photo: uploadedPhoto.Location, id }
      )
    );

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async setMedicalDocumentExpiration(id: number, setMedicalDocumentExpirationDto: SetMedicalDocumentExpirationDto) {
    const response = await lastValueFrom(this.usersClient.send("set-medical-document-expiration", { id, ...setMedicalDocumentExpirationDto }));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async uploadInsurancePhoto(id: number, photo: Express.Multer.File) {
    const uploadedPhoto = await this.fileService.uploadFile(
      photo,
      "insurances",
      this.helpersService.hash({ id, value: "Страховка" })
    );

    const response = await lastValueFrom(
      this.usersClient.send(
        "upload-insurance-photo",
        { photo: uploadedPhoto.Location, id }
      )
    );

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async setInsuranceExpiration(id: number, setInsuranceExpirationDto: SetInsuranceExpirationDto) {
    const response = await lastValueFrom(this.usersClient.send("set-insurance-expiration", { id, ...setInsuranceExpirationDto }));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async getCoachRoles() {
    const response = await lastValueFrom(this.usersClient.send("get-coach-roles", {}));

    if (response?.status >= 400) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  // async createRole(createRoleDto: createRoleDto) {
  //   return await lastValueFrom(this.usersClient.send("create-role", createRoleDto));
  // }
}
