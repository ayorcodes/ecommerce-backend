import { PartialType } from '@nestjs/mapped-types';
import { BasicUpdateDto } from '../../shared/dto/basic-update.dto';
import { CreateTagDto } from './create-tag.dto';

export class UpdateTagDto extends BasicUpdateDto {}
