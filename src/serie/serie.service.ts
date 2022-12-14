import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';
import { SerieRepository } from './serie.repository';

@Injectable()
export class SerieService {
  constructor(private readonly repository: SerieRepository) {}

  create(dto: CreateSerieDto): Promise<SerieEntity> {
    try {
      const data: SerieEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<SerieEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<SerieEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateSerieDto): Promise<SerieEntity> {
    try {
      await this.findOne(id);
      const data: Partial<SerieEntity> = { ...dto };
      return this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<SerieEntity> {
    try {
      await this.findOne(id);
      return this.repository.delete(id);
    } catch (err) {}
  }
}
