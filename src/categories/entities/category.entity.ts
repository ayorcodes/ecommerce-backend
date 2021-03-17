import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';
import { SubCategory } from '../../sub-categories/entities/sub-category.entity';

@Entity('categories')
export class Category extends BasicEntity {
  @ManyToMany(() => SubCategory, (subCategories) => subCategories.categories)
  subCategories: SubCategory[];

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];

  @Column({ default: 0 })
  views: number;
}
