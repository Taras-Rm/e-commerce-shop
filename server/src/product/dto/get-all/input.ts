import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class GetAllProductsInput {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  categoryId?: number;
}
