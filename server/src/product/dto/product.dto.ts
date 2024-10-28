import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/category/dto/category.dto';

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
  category: CategoryDto;
}
