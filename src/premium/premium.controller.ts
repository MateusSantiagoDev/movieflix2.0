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
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
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
  async create(@Body() dto: CreatePremiumDto): Promise<PremiumEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils',
  })
  @Get()
  async findAll(): Promise<PremiumEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PremiumEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePremiumDto,
  ): Promise<PremiumEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Romover um perfil pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PremiumEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
