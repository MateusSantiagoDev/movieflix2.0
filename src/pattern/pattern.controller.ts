import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateBasicDto } from 'src/basic/dto/update-basic.dto';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { PatternEntity } from './entities/pattern.entity';
import { PatternService } from './pattern.service';

@ApiTags('Pattern')
@Controller('pattern')
export class PatternController {
  constructor(private readonly service: PatternService) {}

  @ApiOperation({
    summary: 'adicionar um novo perfil',
  })
  @Post()
  create(@Body() dto: CreatePatternDto): Promise<PatternEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils',
  })
  @Get()
  findAll(): Promise<PatternEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PatternEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBasicDto,
  ): Promise<PatternEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Romover um perfil pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PatternEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
