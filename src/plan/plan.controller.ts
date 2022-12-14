import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PlanEntity } from './entities/plan.entity';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';

@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly service: PlanService) {}

  @ApiOperation({
    summary: 'adcionar um novo plano',
  })
  @Post()
  async create(@Body() dto: CreatePlanDto): Promise<PlanEntity> {
    try {
      return await this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Visualizar todos os planos',
  })
  @Get()
  async findAll(): Promise<PlanEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um plano pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PlanEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um plano pelo ID',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePlanDto,
  ): Promise<PlanEntity> {
    try {
      return await this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover um plano pelo ID',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PlanEntity> {
    try {
      return await this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
