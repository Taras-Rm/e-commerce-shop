import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/category/dto/category.dto';
import { ProductCharacteristicDto } from './product-characteristic.dto';

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  shortDescription: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  pricePer: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  isNew: boolean;

  @ApiProperty()
  category: CategoryDto;

  @ApiProperty()
  characteristics: ProductCharacteristicDto[];
}
