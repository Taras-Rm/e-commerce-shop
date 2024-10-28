import { BaseEntity } from 'src/common/entities/base-entity.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('category')
export class CategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', name: 'parent_id', nullable: true })
  parentId: number;

  @Column({ type: 'varchar', name: 'image_url', nullable: false })
  imageUrl: string;

  // parent category
  @ManyToOne(() => CategoryEntity, (category) => category.subCategories, {
    nullable: true,
  })
  @JoinColumn({ name: 'parent_id' })
  parent: CategoryEntity;

  // subcategories
  @OneToMany(() => CategoryEntity, (category) => category.parent)
  subCategories: CategoryEntity[];

  // relations
  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
