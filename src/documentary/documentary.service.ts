import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DocumentaryRepository } from './documentary.repository';
import { CreateDocumentaryDto } from './dto/create-documentary.dto';
import { UpdateDocumentaryDto } from './dto/update-documentary.dto';
import { DocumentaryEntity } from './entities/documentary.entity';

@Injectable()
export class DocumentaryService {
  constructor(private readonly repository: DocumentaryRepository) {}

  create(dto: CreateDocumentaryDto): Promise<DocumentaryEntity> {
    try {
      const data: DocumentaryEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<DocumentaryEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<DocumentaryEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(
    id: string,
    dto: UpdateDocumentaryDto,
  ): Promise<DocumentaryEntity> {
    try {
      await this.findOne(id);
      const data: Partial<DocumentaryEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<DocumentaryEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
