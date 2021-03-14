import { Column, Entity } from 'typeorm';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('colors')
export class Color extends BasicEntity {
  @Column()
  hexcode: string;
}
