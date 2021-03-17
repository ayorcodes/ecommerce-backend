import { PartialType } from '@nestjs/mapped-types';
import { BasicUpdateDto } from '../../shared/dto/basic-update.dto';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends BasicUpdateDto {}
