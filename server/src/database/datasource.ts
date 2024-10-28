import { DataSourceOptions } from 'typeorm';
import { entities } from './entities';

export const datasurce: DataSourceOptions = {
  type: 'postgres',
  host: 'ep-shiny-haze-a5w18562.us-east-2.aws.neon.tech',
  username: 'test_owner',
  password: 'a0c5ojWDVywJ',
  database: 'test',
  synchronize: true,
  logging: false,
  entities,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  migrationsRun: false,
  ssl: { rejectUnauthorized: false },
};

// postgresql://test_owner:a0c5ojWDVywJ@ep-shiny-haze-a5w18562.us-east-2.aws.neon.tech/test?sslmode=require
