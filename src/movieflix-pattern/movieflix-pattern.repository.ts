import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MoviePatternEntity } from './entities/movieflix-pattern.entity';

@Injectable()
export class MoviePatternRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<MoviePatternEntity[]> {
    return await this.prisma.moviePattern.findMany({
      include: { movie: true, serie: true, drawing: true },
    });
  }

  async findOne(id: string): Promise<MoviePatternEntity> {
    return await this.prisma.moviePattern.findFirstOrThrow({
      where: { id },
      include: { movie: true, serie: true, drawing: true },
    });
  }
}
