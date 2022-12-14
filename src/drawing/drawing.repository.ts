import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DrawingEntity } from './entities/drawing.entity';

@Injectable()
export class DrawingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: DrawingEntity): Promise<DrawingEntity> {
    return await this.prisma.drawing.create({ data });
  }

  async findAll(): Promise<DrawingEntity[]> {
    return await this.prisma.drawing.findMany();
  }

  async findOne(id: string): Promise<DrawingEntity> {
    return await this.prisma.drawing.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<DrawingEntity>,
  ): Promise<DrawingEntity> {
    return await this.prisma.drawing.update({ where: { id }, data });
  }

  async delete(id: string): Promise<DrawingEntity> {
    return await this.prisma.drawing.delete({ where: { id } });
  }
}
