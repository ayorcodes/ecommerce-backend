import { Entity } from 'typeorm';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('sizes')
export class Size extends BasicEntity {}
