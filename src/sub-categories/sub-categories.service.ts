import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category.entity';

@Injectable()
export class SubCategoriesService extends AbstractService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategory: Repository<SubCategory>,
  ) {
    super();
    this.repository = this.subCategory;
    this.name = 'Sub category';
  }
}
