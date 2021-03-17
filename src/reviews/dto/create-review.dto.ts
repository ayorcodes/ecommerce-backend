import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  // @IsNotEmpty()
  @ApiHideProperty()
  userId: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  rating: number;
}
