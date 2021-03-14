import { Column, Entity, OneToMany } from 'typeorm';
import { BasicEntity } from '../../shared/entities/basic-entity';
import { SubCategory } from '../../sub-categories/entities/sub-category.entity';

@Entity('categories')
export class Category extends BasicEntity {
  @OneToMany(() => SubCategory, (subCategories) => subCategories.category)
  subCategories: SubCategory[];

  @Column({ default: 0 })
  views: number;
}
