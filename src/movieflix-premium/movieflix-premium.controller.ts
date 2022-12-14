import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { MoviePremiumEntity } from './entities/movieflix-premium.entity';
import { MoviePremiumService } from './movieflix-premium.service';

@ApiTags('MoviePremium')
@Controller('moviepremium')
export class MoviePremiumController {
  constructor(private readonly service: MoviePremiumService) {}

  @ApiOperation({
    summary:
      'Visualizar todo conteúdo de filmes, series, desenhos e documentários',
  })
  @Get()
  async findAll(): Promise<MoviePremiumEntity[]> {
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
  async findOne(@Param('id') id: string): Promise<MoviePremiumEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
