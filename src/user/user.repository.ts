import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.prisma.user.findUniqueOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<UserEntity> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
