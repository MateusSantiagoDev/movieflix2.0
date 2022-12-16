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
import { CreateMovieBasicDto } from './dto/create-moviebasic.dto';
import { UpdateMovieBasicDto } from './dto/update-moviebasic.dto';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';
import { MovieBasicService } from './movieflix-basic.service';

@ApiTags('MovieBasic')
@Controller('moviebasic')
export class MovieBasicController {
  constructor(private readonly service: MovieBasicService) {}

  @ApiOperation({
    summary: 'Adicionar mais conteúdo para o Movieflix Basic',
  })
  @Post()
  async create(@Body() dto: CreateMovieBasicDto) {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os filmes e séries',
  })
  @Get()
  async findAll() {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar individualmente pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar conteúdo pelo ID',
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateMovieBasicDto) {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover conteúdo pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
