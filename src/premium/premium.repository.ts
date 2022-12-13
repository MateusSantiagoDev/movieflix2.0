import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PremiumEntity } from './entities/premium.entity';

@Injectable()
export class PremiumRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: PremiumEntity): Promise<PremiumEntity> {
    return this.prisma.pattern.create({ data });
  }

  findAll(): Promise<PremiumEntity[]> {
    return this.prisma.pattern.findMany();
  }

  findOne(id: string): Promise<PremiumEntity> {
    return this.prisma.pattern.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<PremiumEntity>): Promise<PremiumEntity> {
    return this.prisma.pattern.update({ where: { id }, data });
  }

  delete(id: string): Promise<PremiumEntity> {
    return this.prisma.pattern.delete({ where: { id } });
  }
}
