import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';
import { SerieService } from './serie.service';

@ApiTags('Serie')
@Controller('serie')
export class SerieController {
  constructor(private readonly service: SerieService) {}

  @ApiOperation({
    summary: 'Adicionar uma nova série',
  })
  @Post()
  async create(@Body() dto: CreateSerieDto): Promise<SerieEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todas as séries',
  })
  @Get()
  async findAll(): Promise<SerieEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar uma série pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SerieEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar uma série pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateSerieDto,
  ): Promise<SerieEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover uma série pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<SerieEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
