import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityMetadata,
  EntityTarget,
  getRepository,
  Repository,
} from 'typeorm';
import { Category } from '../categories/entities/category.entity';
import { Color } from '../colors/entities/color.entity';
import { AbstractService } from '../shared/services/abstract-service.service';
import { Size } from '../sizes/entities/size.entity';
import { SubCategory } from '../sub-categories/entities/sub-category.entity';
import { Tag } from '../tags/entities/tag.entity';
import { Upload } from '../uploads/entities/upload.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService extends AbstractService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {
    super();
    this.repository = this.productRepo;
    this.name = 'Product';
  }

  async create(createProductDto: CreateProductDto) {
    const {
      categoryIds,
      subCategoryIds,
      imageIds,
      tagIds,
      sizeIds,
      colorIds,
    } = createProductDto;

    const categories = await this.resolveRelationships<Category>(
      categoryIds,
      Category,
    );
    const subCategories = await this.resolveRelationships<SubCategory>(
      subCategoryIds,
      SubCategory,
    );
    const images = await this.resolveRelationships<Upload>(imageIds, Upload);
    const tags = await this.resolveRelationships<Tag>(tagIds, Tag);
    const colors = await this.resolveRelationships<Color>(colorIds, Color);
    const sizes = await this.resolveRelationships<Size>(sizeIds, Size);

    delete createProductDto.categoryIds;
    delete createProductDto.subCategoryIds;
    delete createProductDto.imageIds;
    delete createProductDto.tagIds;
    delete createProductDto.colorIds;
    delete createProductDto.sizeIds;

    const response = this.productRepo.create(createProductDto);
    const product = await this.productRepo.save(response);
    console.log({
      product,
      categories,
    });
    product.categories = categories;
    product.subCategories = subCategories;
    product.images = images;
    product.tags = tags;
    product.colors = colors;
    product.sizes = sizes;
    await product.save();
    return product;
  }

  // findAll() {
  //   return `This action returns all products`;
  // }

  async update(id: string, updateProductDto: UpdateProductDto) {
    let product = await this.findOne(id);
    const {
      categoryIds,
      subCategoryIds,
      imageIds,
      tagIds,
      sizeIds,
      colorIds,
    } = updateProductDto;

    const categories = await this.resolveRelationships<Category>(
      categoryIds,
      Category,
    );
    const subCategories = await this.resolveRelationships<SubCategory>(
      subCategoryIds,
      SubCategory,
    );
    const images = await this.resolveRelationships<Upload>(imageIds, Upload);
    const tags = await this.resolveRelationships<Tag>(tagIds, Tag);
    const colors = await this.resolveRelationships<Color>(colorIds, Color);
    const sizes = await this.resolveRelationships<Size>(sizeIds, Size);

    delete updateProductDto.categoryIds;
    delete updateProductDto.subCategoryIds;
    delete updateProductDto.imageIds;
    delete updateProductDto.tagIds;
    delete updateProductDto.colorIds;
    delete updateProductDto.sizeIds;

    await this.productRepo.update(id, updateProductDto);
    product = await this.findOne(id);
    product.categories = categories;
    product.subCategories = subCategories;
    product.images = images;
    product.tags = tags;
    product.colors = colors;
    product.sizes = sizes;
    await product.save();
    return product;
  }
}
