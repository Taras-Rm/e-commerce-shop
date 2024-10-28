import { CategoryDto } from '../dto/category.dto';
import { CategoryEntity } from '../entities/category.entity';

export class CategoryAdapter {
  static toDto(entity: CategoryEntity): CategoryDto {
    return {
      id: entity.id,
      name: entity.name,
      parentId: entity.parentId,
      imageUrl: entity.imageUrl,
      parent: entity.parent && this.toDto(entity.parent),
      subCategories: entity.subCategories
        ? entity.subCategories.map((subCategory) => this.toDto(subCategory))
        : [],
    };
  }
}
