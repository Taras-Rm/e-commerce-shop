import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validate: validateEnv,
    }),
    DatabaseModule,
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
