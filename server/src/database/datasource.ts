import { DataSourceOptions } from 'typeorm';
import { entities } from './entities';

export const datasurce: DataSourceOptions = {
  type: 'postgres',
  host: 'host',
  username: 'd',
  password: 'd',
  database: 's',
  synchronize: true,
  logging: false,
  entities,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  migrationsRun: false,
  ssl: { rejectUnauthorized: false },
};
