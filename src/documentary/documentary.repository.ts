import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DocumentaryEntity } from './entities/documentary.entity';

@Injectable()
export class DocumentaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: DocumentaryEntity): Promise<DocumentaryEntity> {
    return this.prisma.documentary.create({ data });
  }

  findAll(): Promise<DocumentaryEntity[]> {
    return this.prisma.documentary.findMany();
  }

  findOne(id: string): Promise<DocumentaryEntity> {
    return this.prisma.documentary.findUnique({ where: { id } });
  }

  update(
    id: string,
    data: Partial<DocumentaryEntity>,
  ): Promise<DocumentaryEntity> {
    return this.prisma.documentary.update({ where: { id }, data });
  }

  delete(id: string): Promise<DocumentaryEntity> {
    return this.prisma.documentary.delete({ where: { id } });
  }
}
