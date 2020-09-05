import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FleetFMS } from './fleetFMS.entity';

@Injectable()
export class FleetFMSService {
  constructor(
    @Inject('FleetFMSRepositoryToken')
    private readonly fleetFMSRepository: Repository<FleetFMS>,
  ) {}

  async findAll(): Promise<FleetFMS[]> {
    return await this.fleetFMSRepository.find();
  }
}