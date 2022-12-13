import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Mateus Jacinto Santiago',
    })    
    name: string;

    @IsString()
    @ApiProperty({
        description: 'CPF do usuário',
        example: '99999999999'
    })
    cpf: string;

    @IsString()
    @ApiProperty({
        description: 'Email do usuário',
        example: 'exemplo@exemplo.com.br'
    })
    email: string;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Telefone para contrato',
        example: 999999999,
    })
    contato: number;

    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'Idade de usuário',
        example: 20,
    })
    idade: number;

    @IsString()
    @ApiProperty({
        description: 'Cidade',
        example: 'São Paulo'
    })
    cidade: string;

    @IsString()
    @ApiProperty({
        description: 'Permissão de acesso',
    })
    role: string;

    @IsString()
    @ApiProperty({
        description: 'Senha do usuário',
        example: 'secret'
    })
    password: string;

    @IsString()
    @ApiProperty({
        description: 'Confirmação da senha',
        example: 'secret'
    })
    confirmPassword: string;
}