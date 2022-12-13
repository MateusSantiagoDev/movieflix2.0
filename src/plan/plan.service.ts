import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlanEntity } from './entities/plan.entity';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {
  constructor(private readonly repository: PlanRepository) {}
  create(dto: CreatePlanDto): Promise<PlanEntity> {
    try {
      const data: PlanEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<PlanEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<PlanEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdatePlanDto): Promise<PlanEntity> {
    try {
      await this.findOne(id);
      const data: Partial<PlanEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<PlanEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
