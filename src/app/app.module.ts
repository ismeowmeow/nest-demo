import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FleetFMSModule } from '../fleetFMS/fleetFMS.module'

@Module({
  imports: [
    FleetFMSModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
