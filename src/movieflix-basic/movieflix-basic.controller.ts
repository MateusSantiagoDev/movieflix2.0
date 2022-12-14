import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';
import { MovieBasicService } from './movieflix-basic.service';

@ApiTags('MovieBasic')
@Controller('moviebasic')
export class MovieBasicController {
  constructor(private readonly service: MovieBasicService) {}

  @ApiOperation({
    summary: 'Visualizar todos os filmes',
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
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MovieBasicEntity> {
    try {
        return await this.service.findOne(id)
    } catch (err) {
        exceptionhandling(err)
    }
  }
}
