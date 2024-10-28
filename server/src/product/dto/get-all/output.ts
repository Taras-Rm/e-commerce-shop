import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from '../product.dto';

export class GetAllProductsOutput {
  @ApiProperty({ type: ProductDto, isArray: true })
  data: ProductDto[];
}
