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
  create(@Body() dto: CreateBasicDto): Promise<BasicEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils',
  })
  @Get()
  findAll(): Promise<BasicEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<BasicEntity> {
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
  ): Promise<BasicEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Romover um perfil pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<BasicEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
