import { Controller, Get } from '@nestjs/common';
import { FleetFMSService } from './fleetFMS.service';

@Controller('/findAll')
export class FindDataController {
  constructor(private readonly fleetFMSService: FleetFMSService) {}

  @Get()
  findAll(): object {
    return this.fleetFMSService.findAll();
  }
}