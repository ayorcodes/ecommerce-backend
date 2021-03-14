import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../shared/entities/abstract-entity';

@Entity('promo-codes')
export class PromoCode extends AbstractEntity {
  @Column()
  code: string;

  @Column({ default: false })
  status: boolean;
}
