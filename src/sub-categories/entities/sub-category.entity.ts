import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';

@Entity('sub-categories')
export class SubCategory extends BasicEntity {
  @ManyToOne(() => Category, (category) => category.subCategories)
  @JoinColumn()
  category: Category;

  @Column()
  categoryId: string;
}
