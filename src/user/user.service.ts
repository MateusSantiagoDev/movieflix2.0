import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create(dto: CreateUserDto): Promise<UserEntity> {
    try {
      const data: UserEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<UserEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id): Promise<UserEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      await this.findOne(id);
      const data: Partial<UserEntity> = { ...dto };
      return this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<UserEntity> {
    try {
      await this.findOne(id);
      return this.repository.delete(id);
    } catch (err) {}
  }
}
