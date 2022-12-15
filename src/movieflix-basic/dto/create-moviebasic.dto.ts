import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateMovieBasicDto {
  @IsString()
  @ApiProperty({
    description: 'Identificação do perfil por ID',
    example: '',
  })
  basicId: string;

  @IsArray()
  @ApiProperty({
    description: 'Lista de filmes que foram adicionados ao perfil',
    example: '',
  })
  movie?: string[];

  @IsArray()
  @ApiProperty({
    description: 'Lista de séries que foram adicionadas ao perfil',
    example: '',
  })
  serie?: string[];
}
