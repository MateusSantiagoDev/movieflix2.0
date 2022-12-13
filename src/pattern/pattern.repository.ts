import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatternEntity } from './entities/pattern.entity';

@Injectable()
export class PatternRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: PatternEntity): Promise<PatternEntity> {
    return this.prisma.basic.create({ data });
  }

  findAll(): Promise<PatternEntity[]> {
    return this.prisma.basic.findMany();
  }

  findOne(id: string): Promise<PatternEntity> {
    return this.prisma.basic.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<PatternEntity>): Promise<PatternEntity> {
    return this.prisma.basic.update({ where: { id }, data });
  }

  delete(id: string): Promise<PatternEntity> {
    return this.prisma.basic.delete({ where: { id } });
  }
}
