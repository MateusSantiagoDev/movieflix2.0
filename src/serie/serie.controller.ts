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
  create(@Body() dto: CreateSerieDto): Promise<SerieEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todas as séries',
  })
  @Get()
  findAll(): Promise<SerieEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar uma série pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SerieEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar uma série pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateSerieDto,
  ): Promise<SerieEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover uma série pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<SerieEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
