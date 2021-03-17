import { Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('tags')
export class Tag extends BasicEntity {
  @ManyToMany(() => Product, (product) => product.tags)
  product: Product;
}
