import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { BasicUpdateDto } from '../../shared/dto/basic-update.dto';
import { CreateColorDto } from './create-color.dto';

export class UpdateColorDto extends BasicUpdateDto {
  @IsOptional()
  hexcode: string;
}
