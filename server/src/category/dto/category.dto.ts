import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  parentId?: number;

  @ApiProperty()
  imageUrl: string;

  @ApiPropertyOptional({ type: () => CategoryDto })
  parent?: CategoryDto;

  @ApiProperty({ type: () => [CategoryDto] })
  subCategories: CategoryDto[];
}
