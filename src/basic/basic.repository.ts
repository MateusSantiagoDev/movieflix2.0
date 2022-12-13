import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BasicEntity } from './entities/basic.entity';

@Injectable()
export class BasicRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: BasicEntity): Promise<BasicEntity> {
    return this.prisma.basic.create({ data });
  }

  findAll(): Promise<BasicEntity[]> {
    return this.prisma.basic.findMany();
  }

  findOne(id: string): Promise<BasicEntity> {
    return this.prisma.basic.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<BasicEntity>): Promise<BasicEntity> {
    return this.prisma.basic.update({ where: { id }, data });
  }

  delete(id: string): Promise<BasicEntity> {
    return this.prisma.basic.delete({ where: { id } });
  }
}
