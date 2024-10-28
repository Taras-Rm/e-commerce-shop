import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasurce } from './datasource';

@Module({
  imports: [TypeOrmModule.forRoot(datasurce)],
})
export class DatabaseModule {}
