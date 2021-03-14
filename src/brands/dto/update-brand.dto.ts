import { PartialType } from '@nestjs/mapped-types';
import { BasicUpdateDto } from '../../shared/dto/basic-update.dto';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends BasicUpdateDto {}
