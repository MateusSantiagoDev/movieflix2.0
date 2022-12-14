import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SerieEntity } from './entities/serie.entity';

@Injectable()
export class SerieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SerieEntity): Promise<SerieEntity> {
    return await this.prisma.serie.create({ data });
  }

  async findAll(): Promise<SerieEntity[]> {
    return await this.prisma.serie.findMany();
  }

  async findOne(id: string): Promise<SerieEntity> {
    return await this.prisma.serie.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<SerieEntity>): Promise<SerieEntity> {
    return await this.prisma.serie.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SerieEntity> {
    return await this.prisma.serie.delete({ where: { id } });
  }
}
