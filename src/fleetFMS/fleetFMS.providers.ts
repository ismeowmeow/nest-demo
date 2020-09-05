import { Connection, Repository } from 'typeorm';
import { FleetFMS } from './fleetFMS.entity';

export const fleetFMSProviders = [
  {
    provide: 'FleetFMSRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(FleetFMS),
    inject: ['DbConnectionToken'],
  },
];