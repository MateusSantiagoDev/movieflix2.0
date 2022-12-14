import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateDocumentaryDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do documentario',
    example: 'Apollo 11',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do documentario',
    example:
      'Este documentário se aprofunda nos bastidores do histórico pouso da Apollo 11 na Lua, em 1969',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Avaliação do documentario',
    example: 9.5,
  })
  evaluation: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do documentario',
    example:
      'https://www.cineset.com.br/wp-content/uploads/2019/11/Cr%C3%ADtica-Apollo-11-Document%C3%A1rio-Oscar-2020-2.jpg',
  })
  image: string;
}
