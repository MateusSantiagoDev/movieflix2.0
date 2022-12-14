import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';

@Injectable()
export class MovieBasicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<MovieBasicEntity[]> {
    return await this.prisma.movieBasic.findMany({
      include: { movie: true, serie: true },
    });
  }

  async findOne(id: string): Promise<MovieBasicEntity> {
    return await this.prisma.movieBasic.findFirstOrThrow({
      where: { id },
      include: { movie: true, serie: true },
    });
  }
}
