import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlanEntity } from './entities/plan.entity';

@Injectable()
export class PlanRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PlanEntity): Promise<PlanEntity> {
    return await this.prisma.plan.create({ data });
  }

  async findAll(): Promise<PlanEntity[]> {
    return await this.prisma.plan.findMany();
  }

  async findOne(id: string): Promise<PlanEntity> {
    return await this.prisma.plan.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<PlanEntity>): Promise<PlanEntity> {
    return await this.prisma.plan.update({ where: { id }, data });
  }

  async delete(id: string): Promise<PlanEntity> {
    return await this.prisma.plan.delete({ where: { id } });
  }
}
