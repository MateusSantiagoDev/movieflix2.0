import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateBasicDto {

  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Mateus Santiago',
  })
  name: string;
  
  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'example@example.com.br',
  })
  email: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Telefone para contato',
    example: 999999999,
  })
  contact: number;

  @IsString()
  @ApiProperty({
    description: 'CPF do usuário',
    example: '99999999999',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    description: 'Cidade',
    example: 'São Paulo',
  })
  cidade: string;
}
