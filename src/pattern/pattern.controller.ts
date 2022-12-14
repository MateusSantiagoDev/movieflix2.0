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
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
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
  async create(@Body() dto: CreatePatternDto): Promise<PatternEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils',
  })
  @Get()
  async findAll(): Promise<PatternEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PatternEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um perfil pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBasicDto,
  ): Promise<PatternEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Romover um perfil pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PatternEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
