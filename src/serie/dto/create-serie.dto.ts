import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateSerieDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do serie',
    example: 'the walking dead',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição dop serie',
    example: 'serie de suspense',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Avaliação do serie',
    example: 9.5,
  })
  evaluation: number;

  @IsUrl()
  @ApiProperty({
    description: 'Iagem do serie',
    example: 'https://lumiere-a.akamaihd.net/v1/images/398dbf5d3028f1e455b5095ea520edbb_4096x2732_e69b917e.jpeg?region=682,0,2732,2732',
 })
  image: string;
}
