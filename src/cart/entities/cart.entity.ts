import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { User } from '../../users/entities/user.entity';

@Entity('cart')
export class Cart extends AbstractEntity {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  quantity: number;
}
