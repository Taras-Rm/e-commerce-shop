import { BaseEntity } from 'src/common/entities/base-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity('product_characteristic')
export class ProductCharacteristicEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  key: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;

  @Column({ type: 'int', name: 'product_id', nullable: false })
  productId: number;
}
