import { ApiProperty } from '@nestjs/swagger';

export class ProductCharacteristicDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  key: string;

  @ApiProperty()
  value: string;
}
