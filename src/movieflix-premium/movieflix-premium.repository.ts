/* import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MoviePremiumEntity } from './entities/movieflix-premium.entity';

@Injectable()
export class MoviePremiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<MoviePremiumEntity[]> {
    return await this.prisma.moviePremium.findMany({
      include: { movie: true, serie: true, drawing: true, documentary: true },
    });
  }

  async findOne(id: string): Promise<MoviePremiumEntity> {
    return await this.prisma.moviePremium.findFirstOrThrow({
      where: { id },
      include: { movie: true, serie: true, drawing: true, documentary: true },
    });
  }
}
 */