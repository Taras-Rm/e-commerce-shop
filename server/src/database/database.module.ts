import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasurceOptions } from './datasource';

@Module({
  imports: [TypeOrmModule.forRoot(datasurceOptions)],
})
export class DatabaseModule {}
