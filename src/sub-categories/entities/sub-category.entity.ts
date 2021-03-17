import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('sub-categories')
export class SubCategory extends BasicEntity {
  @ManyToMany(() => Category, (category) => category.subCategories)
  // @JoinColumn()
  categories: Category[];

  @ManyToMany(() => Product, (product) => product.subCategories)
  products: Product[];

  // @Column()
  // categoryId: string;
}
