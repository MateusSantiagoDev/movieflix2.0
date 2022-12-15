import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { CreateMovieBasicDto } from './dto/create-moviebasic.dto';
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
  async create(@Body() dto: CreateMovieBasicDto): Promise<MovieBasicEntity> {
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
  async findAll(): Promise<MovieBasicEntity[]> {
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
  async findOne(@Param('id') id: string): Promise<MovieBasicEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
