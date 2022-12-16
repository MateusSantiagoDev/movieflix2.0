import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieBasicDto } from './dto/create-moviebasic.dto';
import { UpdateMovieBasicDto } from './dto/update-moviebasic.dto';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';

@Injectable()
export class MovieBasicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(id: string, { userId, movieId, serieId }: CreateMovieBasicDto) {
    const data: Prisma.MovieBasicCreateInput = {
      id,
      user: {
        connect: {
          id: userId,
        },
      },
      movie: {
        connect: movieId.map((el) => ({ id: el })),
      },
      serie: {
        connect: serieId.map((el) => ({ id: el })),
      },
    };
    return await this.prisma.movieBasic.create({ data });
  }
  async findAll() {
    return await this.prisma.movieBasic.findMany({
      include: { user: true, movie: true, serie: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.movieBasic.findFirstOrThrow({
      where: { id },
      include: { user: true, movie: true, serie: true },
    });
  }

  async update(id: string, { userId, movieId, serieId }: UpdateMovieBasicDto) {
    return await this.prisma.movieBasic.update({
      where: { id },
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        movie: {
          connect: movieId.map((el) => ({ id: el })),
        },
        serie: {
          connect: serieId.map((el) => ({ id: el })),
        },
      },
      include: { user: true, movie: true, serie: true },
    });
  }

  async delete(id: string) {
    return await this.prisma.movieBasic.delete({ where: { id } });
  }
}
