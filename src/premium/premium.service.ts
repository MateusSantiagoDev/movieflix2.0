import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePremiumDto } from './dto/create-premium.dto';
import { UpdatePremiumDto } from './dto/update-premium.dto';
import { PremiumEntity } from './entities/premium.entity';
import { PremiumRepository } from './premium.repository';


@Injectable()
export class PremiumService {
  constructor(private readonly repository: PremiumRepository) {}

  create(dto: CreatePremiumDto): Promise<PremiumEntity> {
    try {
      const data: PremiumEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<PremiumEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<PremiumEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdatePremiumDto): Promise<PremiumEntity> {
    try {
      await this.findOne(id);
      const data: Partial<PremiumEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<PremiumEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
