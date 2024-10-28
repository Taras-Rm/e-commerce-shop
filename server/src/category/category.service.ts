import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.subCategories', 'subCategories')
      .loadRelationCountAndMap('category.productsCount', 'category.products')
      .where('category.parentId IS NULL')
      .getMany();

    return this.loadSubCategories(categories);
  }

  // load subcategories recursively
  private async loadSubCategories(
    categories: CategoryEntity[],
  ): Promise<CategoryEntity[]> {
    for (const category of categories) {
      if (category.subCategories && category.subCategories.length > 0) {
        const subCategories = await this.categoryRepository
          .createQueryBuilder('category')
          .leftJoinAndSelect('category.subCategories', 'subCategories')
          .loadRelationCountAndMap(
            'category.productsCount',
            'category.products',
          )
          .where('category.parentId = :parentId', { parentId: category.id })
          .getMany();

        category.subCategories = await this.loadSubCategories(subCategories);

        // count products count
        category.productsCount += category.subCategories.reduce(
          (sum, subCategory) => sum + (subCategory.productsCount || 0),
          0,
        );
      }
    }

    return categories;
  }
}
