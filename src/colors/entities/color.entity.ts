import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('colors')
export class Color extends BasicEntity {
  @Column()
  hexcode: string;

  @ManyToMany(() => Product, (product) => product.colors)
  product: Product;
}
