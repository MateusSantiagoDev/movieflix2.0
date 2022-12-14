import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DocumentaryEntity } from './entities/documentary.entity';

@Injectable()
export class DocumentaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: DocumentaryEntity): Promise<DocumentaryEntity> {
    return await this.prisma.documentary.create({ data });
  }

  async findAll(): Promise<DocumentaryEntity[]> {
    return await this.prisma.documentary.findMany();
  }

  async findOne(id: string): Promise<DocumentaryEntity> {
    return await this.prisma.documentary.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<DocumentaryEntity>,
  ): Promise<DocumentaryEntity> {
    return await this.prisma.documentary.update({ where: { id }, data });
  }

  async delete(id: string): Promise<DocumentaryEntity> {
    return await this.prisma.documentary.delete({ where: { id } });
  }
}
