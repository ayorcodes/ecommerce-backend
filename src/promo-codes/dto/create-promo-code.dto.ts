import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePromoCodeDto {
  @IsNotEmpty()
  code: string;

  @IsOptional()
  slots: number;

  // @IsNotEmpty()
  // status: boolean;
}
