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
import { DrawingService } from './drawing.service';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';
import { DrawingEntity } from './entities/drawing.entity';

@ApiTags('Drawing')
@Controller('drawing')
export class DrawingController {
  constructor(private readonly service: DrawingService) {}

  @ApiOperation({
    summary: 'Adicionar um novo desenho',
  })
  @Post()
  create(@Body() dto: CreateDrawingDto): Promise<DrawingEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os desenhos',
  })
  @Get()
  findAll(): Promise<DrawingEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um desenho pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<DrawingEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um desenho pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDrawingDto,
  ): Promise<DrawingEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um desenho pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DrawingEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
