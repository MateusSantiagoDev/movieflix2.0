import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { BasicRepository } from './basic.repository';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { BasicEntity } from './entities/basic.entity';

@Injectable()
export class BasicService {
  constructor(private readonly repository: BasicRepository) {}

  create(dto: CreateBasicDto): Promise<BasicEntity> {
    try {
      const data: BasicEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<BasicEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<BasicEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateBasicDto): Promise<BasicEntity> {
    try {
      await this.findOne(id);
      const data: Partial<BasicEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<BasicEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
