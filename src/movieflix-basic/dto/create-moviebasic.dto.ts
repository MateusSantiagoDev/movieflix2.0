import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateMovieBasicDto {
  @IsString()
  @ApiProperty({
    description: 'Identificação do usuário pelo ID',
    example: 'd8b09a66-3654-44aa-8ce4-7d6e75202aad',
  })
  userId?: string;

  @IsArray()
  @ApiProperty({
    description: 'Lista de filmes que foram adicionados ao perfil',
    example: '["38896264-b0c9-4470-90d6-438a7d276d78"]',
  })
  movieId?: string[];

  @IsArray()
  @ApiProperty({
    description: 'Lista de séries que foram adicionadas ao perfil',
    example: '["3b0b983d-a4d8-429d-8d02-363cb6f8d9ac"]',
  })
  serieId?: string[];
}
