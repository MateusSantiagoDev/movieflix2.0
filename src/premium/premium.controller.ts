import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePremiumDto } from './dto/create-premium.dto';
import { UpdatePremiumDto } from './dto/update-premium.dto';
import { PremiumEntity } from './entities/premium.entity';
import { PremiumService } from './premium.service';

@ApiTags('Premium')
@Controller('premium')
export class PremiumController {
  constructor(private readonly service: PremiumService) {}

  @ApiOperation({
    summary: 'adicionar um novo perfil',
  })
  @Post()
  create(@Body() dto: CreatePremiumDto): Promise<PremiumEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils',
  })
  @Get()
  findAll(): Promise<PremiumEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PremiumEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePremiumDto,
  ): Promise<PremiumEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Romover um perfil pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PremiumEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
