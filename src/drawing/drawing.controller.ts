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
  async create(@Body() dto: CreateDrawingDto): Promise<DrawingEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os desenhos',
  })
  @Get()
  async findAll(): Promise<DrawingEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um desenho pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DrawingEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um desenho pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDrawingDto,
  ): Promise<DrawingEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover um desenho pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DrawingEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
