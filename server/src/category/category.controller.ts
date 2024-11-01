import { Controller, Get, Param } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { CategoryAdapter } from './adapters/category.adapter';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('')
  @ApiOkResponse({
    type: CategoryDto,
    isArray: true,
    description: 'Get all categories with subCategories',
  })
  async getAllCategories(): Promise<CategoryDto[]> {
    const categories = await this.categoryService.getAll();

    return categories.map((category) => CategoryAdapter.toDto(category));
  }

  @Get('/:id/subCategories')
  @ApiOkResponse({
    type: CategoryDto,
    isArray: true,
    description: 'Get all category subCategories',
  })
  async getAllCategorySubCategories(
    @Param('id') id: number,
  ): Promise<CategoryDto[]> {
    const categories = await this.categoryService.getCategorySubCategories(id);

    return categories.map((category) => CategoryAdapter.toDto(category));
  }
}
