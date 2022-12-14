import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieEntity } from './entities/movie-entity';

@Injectable()
export class MovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: MovieEntity): Promise<MovieEntity> {
    return this.prisma.movie.create({ data });
  }

  findAll(): Promise<MovieEntity[]> {
    return this.prisma.movie.findMany();
  }

  findOne(id: string): Promise<MovieEntity> {
    return this.prisma.movie.findUnique({ where: { id } });
  }

  update(id: string, data: Partial<MovieEntity>): Promise<MovieEntity> {
    return this.prisma.movie.update({ where: { id }, data });
  }

  delete(id: string): Promise<MovieEntity> {
    return this.prisma.movie.delete({ where: { id } });
  }
}
