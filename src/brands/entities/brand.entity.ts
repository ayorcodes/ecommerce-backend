import { Entity, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('brands')
export class Brand extends BasicEntity {
  // @ManyToOne(() => Product, (product) => product.brands)
  // product: Product;
}
