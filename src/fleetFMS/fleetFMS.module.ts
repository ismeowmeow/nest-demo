import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { fleetFMSProviders } from './fleetFMS.providers';
import { FleetFMSService } from './fleetFMS.service';
import { FindDataController } from './fleetFMS.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FindDataController],
  providers: [
    ...fleetFMSProviders,
    FleetFMSService,
  ],
})
export class FleetFMSModule {}