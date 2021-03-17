import { Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('sizes')
export class Size extends BasicEntity {
  @ManyToMany(() => Product, (product) => product.sizes)
  product: Product;
}
