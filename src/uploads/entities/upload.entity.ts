import {
  AfterLoad,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Helper } from '../../shared/helpers';

@Entity('uploads')
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalName: string;

  @Column()
  fileName: string;

  fullPath: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;

  @AfterLoad()
  // @AfterInsert()
  formatAvatar() {
    this.fullPath = Helper.fileUrl(this.fileName);
  }
}
