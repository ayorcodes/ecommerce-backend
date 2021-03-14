import { ApiProperty } from '@nestjs/swagger';

export class BasicResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;
}
