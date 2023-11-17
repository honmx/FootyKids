import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({ name: "PLACES" }),
  ],
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class PlacesModule {}
