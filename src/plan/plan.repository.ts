import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlanEntity } from './entities/plan.entity';

@Injectable()
export class PlanRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: PlanEntity): Promise<PlanEntity> {
    return this.prisma.plan.create({ data });
  }

  findAll(): Promise<PlanEntity[]> {
    return this.prisma.plan.findMany();
  }

  findOne(id: string): Promise<PlanEntity> {
    return this.prisma.plan.findFirstOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<PlanEntity>): Promise<PlanEntity> {
    return this.prisma.plan.update({ where: { id }, data });
  }

  delete(id: string): Promise<PlanEntity> {
    return this.prisma.plan.delete({ where: { id } });
  }
}
