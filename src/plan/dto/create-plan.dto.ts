import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreatePlanDto {
    @IsString()
    @ApiProperty({
        description: 'Plano basico',
    })
    basic: string;

    @IsString()
    @ApiProperty({
        description: 'Plano padrão',
    })
    pattern: string;

    @IsString()
    @ApiProperty({
        description: 'Plano premio',
    })
    premium: string;
}
