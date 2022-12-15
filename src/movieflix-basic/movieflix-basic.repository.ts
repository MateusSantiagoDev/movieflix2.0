import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieBasicDto } from './dto/create-moviebasic.dto';
import { UpdateMovieBasicDto } from './dto/update-moviebasic.dto';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';

@Injectable()
export class MovieBasicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    id: string,
    { basicId, movie, serie }: CreateMovieBasicDto,
  ): Promise<MovieBasicEntity> {
    return await this.prisma.movieBasic.create({
      data: {
        id,
        basicId,
        movie: {
          connect: movie.map((el) => ({ id: el })),
        },
        serie: {
          connect: serie.map((el) => ({ id: el })),
        },
      },
    });
  }

  async findAll(): Promise<MovieBasicEntity[]> {
    return await this.prisma.movieBasic.findMany({
      include: { Basic: true, movie: true, serie: true },
    });
  }

  async findOne(id: string): Promise<MovieBasicEntity> {
    return await this.prisma.movieBasic.findFirstOrThrow({
      where: { id },
      include: { movie: true, serie: true },
    });
  }

  async update(
    id: string,
    { basicId, movie, serie }: UpdateMovieBasicDto,
  ): Promise<MovieBasicEntity> {
    return await this.prisma.movieBasic.update({
      where: { id },
      data: {
        basicId,
        movie: {
          connect: movie.map((el) => ({ id: el })),
        },
        serie: {
          connect: serie.map((el) => ({ id: el })),
        },
      },
    });
  }

  async delete(id: string): Promise<MovieBasicEntity> {
    return await this.prisma.movieBasic.delete({ where: {id} })
  }
}
