import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SerieEntity } from './entities/serie.entity';

@Injectable()
export class SerieRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: SerieEntity): Promise<SerieEntity> {
    return this.prisma.serie.create({ data });
  }

  findAll(): Promise<SerieEntity[]> {
    return this.prisma.serie.findMany();
  }

  findOne(id: string): Promise<SerieEntity> {
    return this.prisma.serie.findFirstOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<SerieEntity>): Promise<SerieEntity> {
    return this.prisma.serie.update({ where: { id }, data });
  }

  delete(id: string): Promise<SerieEntity> {
    return this.prisma.serie.delete({ where: { id } });
  }
}
