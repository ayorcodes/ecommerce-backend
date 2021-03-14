import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  postalCode: string;
}
