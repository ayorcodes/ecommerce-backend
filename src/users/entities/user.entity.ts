import { AbstractEntity } from 'src/shared/entities/abstract-entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { classToPlain, Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { Address } from '../../addresses/entities/address.entity';
import { address } from 'faker';

@Entity('users')
export class User extends AbstractEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, unique: true })
  phoneNumber: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @Column()
  token: string;

  @ManyToOne(() => Role, (role) => role.users, { eager: true })
  @JoinColumn()
  role: Role;

  @Column({ nullable: true })
  roleId: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @Column({ default: true })
  status: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }

  toJSON() {
    return classToPlain(this);
  }
}
