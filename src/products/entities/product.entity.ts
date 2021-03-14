import { Column, Entity, OneToMany } from 'typeorm';
import { BasicEntity } from '../../shared/entities/basic-entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Upload } from '../../uploads/entities/upload.entity';

@Entity('products')
export class Product extends BasicEntity {
  @Column()
  shortDescription: string;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  discount: number;

  @Column()
  availability: string;

  // @Column()
  // categoryId: string;

  // @Column()
  // subCategoryId: string;

  @Column({ default: 0 })
  quantity: number;

  @Column()
  sku: string;

  @OneToMany(() => Tag, tags=>tags.product)
  tags: Tag[];

  @OneToMany(() => Upload, images=>images.product)
  images: Upload[];

  @Column({default: false})
  featured: boolean;

}
