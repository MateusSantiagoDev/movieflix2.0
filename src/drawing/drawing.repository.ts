import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DrawingEntity } from './entities/drawing.entity';

@Injectable()
export class DrawingRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: DrawingEntity): Promise<DrawingEntity> {
    return this.prisma.drawing.create({ data });
  }

  findAll(): Promise<DrawingEntity[]> {
    return this.prisma.drawing.findMany();
  }

  findOne(id: string): Promise<DrawingEntity> {
    return this.prisma.drawing.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<DrawingEntity>): Promise<DrawingEntity> {
    return this.prisma.drawing.update({ where: { id }, data });
  }

  delete(id: string): Promise<DrawingEntity> {
    return this.prisma.drawing.delete({ where: { id } });
  }
}
