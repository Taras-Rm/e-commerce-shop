import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './entities';
import { appConfig } from 'src/config/app';

export const datasurceOptions: DataSourceOptions = {
  type: 'postgres',
  url: appConfig.databaseUrl,
  synchronize: true,
  logging: false,
  entities,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  migrationsRun: false,
  ssl: { rejectUnauthorized: false },
};

export const datasurce = new DataSource(datasurceOptions);
