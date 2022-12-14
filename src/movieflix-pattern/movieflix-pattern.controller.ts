import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { exceptionhandling } from "src/utils/exceptions/exceptionhandling";
import { MoviePatternEntity } from "./entities/movieflix-pattern.entity";
import { MoviePatternService } from "./movieflix-pattern.service";

@ApiTags('MoviePattern')
@Controller('moviepattern')
export class MoviePatternController {
    constructor(private readonly service: MoviePatternService) {}

    @ApiOperation({
        summary: 'Visualizar todo conteúdo de filmes, series e desenhos',
      })
      @Get()
      async findAll(): Promise<MoviePatternEntity[]> {
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
      async findOne(@Param('id') id: string): Promise<MoviePatternEntity> {
        try {
            return await this.service.findOne(id)
        } catch (err) {
            exceptionhandling(err)
        }
      }
}