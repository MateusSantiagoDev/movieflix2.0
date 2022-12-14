import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DrawingRepository } from './drawing.repository';
import { CreateDrawingDto } from './dto/create-drawing.dto';
import { UpdateDrawingDto } from './dto/update-drawing.dto';
import { DrawingEntity } from './entities/drawing.entity';

@Injectable()
export class DrawingService {
  constructor(private readonly repository: DrawingRepository) {}

  create(dto: CreateDrawingDto): Promise<DrawingEntity> {
    try {
      const data: DrawingEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<DrawingEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<DrawingEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateDrawingDto): Promise<DrawingEntity> {
    try {
      await this.findOne(id);
      const data: Partial<DrawingEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<DrawingEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
