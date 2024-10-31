import { ProductCharacteristicEntity } from '../entities/product-characteristic.entity';
import { ProductCharacteristicDto } from '../dto/product-characteristic.dto';

export class ProductCharacteristicAdapter {
  static toDto(entity: ProductCharacteristicEntity): ProductCharacteristicDto {
    return {
      id: entity.id,
      key: entity.key,
      value: entity.value,
    };
  }
}
