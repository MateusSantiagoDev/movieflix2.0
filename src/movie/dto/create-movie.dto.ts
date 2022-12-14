import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do filme',
    example: 'Piratas do caribe',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição dop filme',
    example: 'Filme de aventura',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Avaliação do filme',
    example: 9.5,
  })
  evaluation: number;

  @IsUrl()
  @ApiProperty({
    description: 'I,agem do filme',
    example:
      'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Johnny_Depp_Pirates_of_the_Caribbean_Dead_Men_Tell_521035_3840x2160.jpg',
  })
  image: string;
}
