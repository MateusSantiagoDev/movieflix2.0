import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Mateus Jacinto Santiago',
    })    
    name: string;

    @ApiProperty({
        description: 'CPF do usuário',
        example: '99999999999'
    })
    cpf: string;

    @ApiProperty({
        description: 'Email do usuário',
        example: 'exemplo@exemplo.com.br'
    })
    email: string;

    @ApiProperty({
        description: 'Telefone para contrato',
        example: 999999999,
    })
    contato: number;

    @ApiProperty({
        description: 'Idade de usuário',
        example: 20,
    })
    idade: number;

    @ApiProperty({
        description: 'Cidade',
        example: 'São Paulo'
    })
    cidade: string;

    @ApiProperty({
        description: 'Permissão de acesso',
    })
    role: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'secret'
    })
    password: string;

    @ApiProperty({
        description: 'Confirmação da senha',
        example: 'secret'
    })
    confirmPassword: string;
}