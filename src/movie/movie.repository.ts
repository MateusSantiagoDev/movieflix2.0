import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieEntity } from './entities/movie-entity';

@Injectable()
export class MovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MovieEntity): Promise<MovieEntity> {
    return await this.prisma.movie.create({ data });
  }

  async findAll(): Promise<MovieEntity[]> {
    return await this.prisma.movie.findMany();
  }

  async findOne(id: string): Promise<MovieEntity> {
    return await this.prisma.movie.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<MovieEntity>): Promise<MovieEntity> {
    return await this.prisma.movie.update({ where: { id }, data });
  }

  async delete(id: string): Promise<MovieEntity> {
    return await this.prisma.movie.delete({ where: { id } });
  }
}
