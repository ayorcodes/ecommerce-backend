import { IsNotEmpty, IsOptional } from 'class-validator';
import { BasicCreateDto } from '../../shared/dto/basic-create.dto';

export class CreateProductDto extends BasicCreateDto {
  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  discount: number;

  @IsNotEmpty()
  availability: boolean;

  @IsNotEmpty()
  categoryIds: string[];

  @IsNotEmpty()
  colorIds: string[];

  @IsNotEmpty()
  sizeIds: string[];

  @IsOptional()
  subCategoryIds: string[];

  // @IsNotEmpty()
  // categoryId: string;

  // @IsNotEmpty()
  // subCategoryId: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  tagIds: string[];

  @IsOptional()
  brandId: string;

  @IsNotEmpty()
  imageIds: number[];

  @IsNotEmpty()
  featured: boolean;
}
