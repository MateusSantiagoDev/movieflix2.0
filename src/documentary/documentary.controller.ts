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
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
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
  async create(@Body() dto: CreateDocumentaryDto): Promise<DocumentaryEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os documentarios',
  })
  @Get()
  async findAll(): Promise<DocumentaryEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um documentario pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DocumentaryEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um documentario pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDocumentaryDto,
  ): Promise<DocumentaryEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover um documentario pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DocumentaryEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
