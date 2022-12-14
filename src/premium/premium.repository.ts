import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PremiumEntity } from './entities/premium.entity';

@Injectable()
export class PremiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PremiumEntity): Promise<PremiumEntity> {
    return await this.prisma.premium.create({ data });
  }

  async findAll(): Promise<PremiumEntity[]> {
    return await this.prisma.premium.findMany();
  }

  async findOne(id: string): Promise<PremiumEntity> {
    return await this.prisma.premium.findUniqueOrThrow({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<PremiumEntity>,
  ): Promise<PremiumEntity> {
    return await this.prisma.premium.update({ where: { id }, data });
  }

  async delete(id: string): Promise<PremiumEntity> {
    return await this.prisma.premium.delete({ where: { id } });
  }
}
