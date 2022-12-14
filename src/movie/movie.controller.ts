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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie-entity';
import { MovieService } from './movie.service';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @ApiOperation({
    summary: 'adicionar um novo filme',
  })
  @Post()
  create(@Body() dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os filmes',
  })
  @Get()
  findAll(): Promise<MovieEntity> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<MovieEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um filme pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMovieDto,
  ): Promise<MovieEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um filme pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<MovieEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
