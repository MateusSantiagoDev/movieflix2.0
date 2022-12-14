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
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { BasicService } from './basic.service';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { BasicEntity } from './entities/basic.entity';

@ApiTags('Basic')
@Controller('basic')
export class BasicController {
  constructor(private readonly service: BasicService) {}

  @ApiOperation({
    summary: 'adicionar um novo perfil',
  })
  @Post()
  async create(@Body() dto: CreateBasicDto): Promise<BasicEntity> {
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
  async findAll(): Promise<BasicEntity[]> {
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
  async findOne(@Param('id') id: string): Promise<BasicEntity> {
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
  ): Promise<BasicEntity> {
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
  async delete(@Param('id') id: string): Promise<BasicEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
