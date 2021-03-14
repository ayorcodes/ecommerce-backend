import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { User } from '../../users/entities/user.entity';

@Entity('addresses')
export class Address extends AbstractEntity {
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Column()
  phoneNumber: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;
}
