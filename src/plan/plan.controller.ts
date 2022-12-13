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

@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly service: PlanService) {}

  @ApiOperation({
    summary: 'adcionar um novo plano',
  })
  @Post()
  create(@Body() dto: CreatePlanDto): Promise<PlanEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os planos',
  })
  @Get()
  findAll(): Promise<PlanEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um plano pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PlanEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um plano pelo ID',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlanDto): Promise<PlanEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um plano pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PlanEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
