import { CategoryEntity } from 'src/category/entities/category.entity';
import { BaseEntity } from 'src/common/entities/base-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';
import { ProductCharacteristicEntity } from './product-characteristic.entity';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'float', nullable: true })
  price: number;

  @Column({ type: 'varchar', nullable: false })
  currency: string;

  @Column({ type: 'varchar', name: 'short_description', nullable: false })
  shortDescription: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', nullable: false })
  code: string;

  @Column({ type: 'int', name: 'category_id', nullable: false })
  categoryId: number;

  @Column({ type: 'varchar', name: 'image_url', nullable: true })
  imageUrl: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  quantity: number;

  // TODO: enum
  @Column({ type: 'varchar', name: 'price_per', nullable: true })
  pricePer: string;

  // relations
  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  category: Relation<CategoryEntity>;

  @OneToMany(
    () => ProductCharacteristicEntity,
    (characteristic) => characteristic,
  )
  characteristics: Relation<ProductCharacteristicEntity[]>;
}
