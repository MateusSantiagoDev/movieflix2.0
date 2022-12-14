import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatternEntity } from './entities/pattern.entity';

@Injectable()
export class PatternRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PatternEntity): Promise<PatternEntity> {
    return await this.prisma.pattern.create({ data });
  }

  async findAll(): Promise<PatternEntity[]> {
    return await this.prisma.pattern.findMany();
  }

  async findOne(id: string): Promise<PatternEntity> {
    return await this.prisma.pattern.findUniqueOrThrow({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<PatternEntity>,
  ): Promise<PatternEntity> {
    return await this.prisma.pattern.update({ where: { id }, data });
  }

  async delete(id: string): Promise<PatternEntity> {
    return await this.prisma.pattern.delete({ where: { id } });
  }
}
