import { CategoryAdapter } from 'src/category/adapters/category.adapter';
import { ProductDto } from '../dto/product.dto';
import { ProductEntity } from '../entities/product.entity';

export class ProductAdapter {
  static toDto(entity: ProductEntity): ProductDto {
    return {
      id: entity.id,
      name: entity.name,
      price: entity.price,
      currency: entity.currency,
      shortDescription: entity.shortDescription,
      description: entity.description,
      code: entity.code,
      categoryId: entity.categoryId,
      imageUrl: entity.imageUrl,
      pricePer: entity.pricePer,
      quantity: entity.quantity,
      isNew: entity.isNew,
      category: entity.category && CategoryAdapter.toDto(entity.category),
    };
  }
}
