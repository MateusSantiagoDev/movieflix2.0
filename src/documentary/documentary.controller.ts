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
import { DocumentaryService } from './documentary.service';
import { CreateDocumentaryDto } from './dto/create-documentary.dto';
import { UpdateDocumentaryDto } from './dto/update-documentary.dto';
import { DocumentaryEntity } from './entities/documentary.entity';

@ApiTags('Documentary')
@Controller('documentary')
export class DocumentaryController {
  constructor(private readonly service: DocumentaryService) {}

  @ApiOperation({
    summary: 'Adicionar um novo documentario',
  })
  @Post()
  create(@Body() dto: CreateDocumentaryDto): Promise<DocumentaryEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os documentarios',
  })
  @Get()
  findAll(): Promise<DocumentaryEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um documentario pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<DocumentaryEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um documentario pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDocumentaryDto,
  ): Promise<DocumentaryEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um documentario pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DocumentaryEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
