import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { User } from '../../users/entities/user.entity';

@Entity('reviews')
export class Review extends AbstractEntity {
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @Column()
  productId: string;

  @Column()
  title: string;

  @Column('text')
  body: string;

  @Column({ default: 0 })
  rating: number;
}
