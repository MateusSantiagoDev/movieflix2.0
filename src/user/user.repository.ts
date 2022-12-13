import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: UserEntity): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.prisma.user.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return this.prisma.user.update({ where: { id }, data });
  }

  delete(id: string): Promise<UserEntity> {
    return this.prisma.user.delete({ where: { id } });
  }
}
