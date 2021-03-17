import { IsNotEmpty } from 'class-validator';
import { BasicCreateDto } from '../../shared/dto/basic-create.dto';

export class CreateColorDto extends BasicCreateDto {
  @IsNotEmpty()
  hexcode: string;
}
