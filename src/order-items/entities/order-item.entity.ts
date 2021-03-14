import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Color } from '../../colors/entities/color.entity';
import { Product } from '../../products/entities/product.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';

@Entity('order-items')
export class OrderItem extends AbstractEntity {
  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @Column()
  productId: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  size: string;

  @Column()
  quantity: number;
}
