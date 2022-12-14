import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BasicEntity } from './entities/basic.entity';

@Injectable()
export class BasicRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: BasicEntity): Promise<BasicEntity> {
    return await this.prisma.basic.create({ data });
  }

  async findAll(): Promise<BasicEntity[]> {
    return await this.prisma.basic.findMany();
  }

  async findOne(id: string): Promise<BasicEntity> {
    return await this.prisma.basic.findUniqueOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<BasicEntity>): Promise<BasicEntity> {
    return await this.prisma.basic.update({ where: { id }, data });
  }

  async delete(id: string): Promise<BasicEntity> {
    return await this.prisma.basic.delete({ where: { id } });
  }
}
