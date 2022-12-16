import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateDrawingDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do desenho',
    example: 'Naruto',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição dop desenho',
    example: 'desenho de aventura',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Avaliação do desenho',
    example: 9.5,
  })
  evaluation: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do desenho',
    example:
      'https://akamai.sscdn.co/uploadfile/letras/playlists/c/8/d/2/c8d2c68c37e14169b08f2fe288bcda53.jpg',
  })
  image: string;

  @IsArray()
  @ApiProperty({
    description: 'Plano padrão',
    example: '[]',
  })
  moviepattern: string[];

  @IsArray()
  @ApiProperty({
    description: 'Plano premio',
    example: '[]',
  })
  moviepremium: string[];
}
