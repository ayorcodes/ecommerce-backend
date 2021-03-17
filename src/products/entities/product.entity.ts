import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Brand } from '../../brands/entities/brand.entity';
import { Category } from '../../categories/entities/category.entity';
import { Color } from '../../colors/entities/color.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';
import { Size } from '../../sizes/entities/size.entity';
import { SubCategory } from '../../sub-categories/entities/sub-category.entity';
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
  availability: boolean;

  @ManyToMany(() => Category, (categories) => categories.products, {
    eager: true,
  })
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => SubCategory, (subCategories) => subCategories.products, {
    eager: true,
  })
  @JoinTable()
  subCategories: SubCategory[];

  // @Column()
  // categoryId: string;

  // @Column()
  // subCategoryId: string;

  @Column({ default: 0 })
  quantity: number;

  @Column()
  sku: string;

  @ManyToMany(() => Tag, (tags) => tags.product, { eager: true })
  @JoinTable()
  tags: Tag[];

  @ManyToMany(() => Size, (sizes) => sizes.product, { eager: true })
  @JoinTable()
  sizes: Size[];

  @ManyToMany(() => Color, (colors) => colors.product, { eager: true })
  @JoinTable()
  colors: Color[];

  @ManyToOne(() => Brand, { eager: true })
  @JoinColumn()
  brand: Brand;

  @Column()
  brandId: string;

  @OneToMany(() => Upload, (images) => images.product)
  images: Upload[];

  @Column({ default: false })
  featured: boolean;
}
