import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
import { PatternEntity } from './entities/pattern.entity';
import { PatternRepository } from './pattern.repository';


@Injectable()
export class PatternService {
  constructor(private readonly repository: PatternRepository) {}

  create(dto: CreatePatternDto): Promise<PatternEntity> {
    try {
      const data: PatternEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<PatternEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<PatternEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdatePatternDto): Promise<PatternEntity> {
    try {
      await this.findOne(id);
      const data: Partial<PatternEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<PatternEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
