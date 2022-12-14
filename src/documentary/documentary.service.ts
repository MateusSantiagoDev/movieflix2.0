import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exception.types';
import { DocumentaryRepository } from './documentary.repository';
import { CreateDocumentaryDto } from './dto/create-documentary.dto';
import { UpdateDocumentaryDto } from './dto/update-documentary.dto';
import { DocumentaryEntity } from './entities/documentary.entity';

@Injectable()
export class DocumentaryService {
  constructor(private readonly repository: DocumentaryRepository) {}

  async create(dto: CreateDocumentaryDto): Promise<DocumentaryEntity> {
    try {
      const data: DocumentaryEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<DocumentaryEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findOne(id: string): Promise<DocumentaryEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(
    id: string,
    dto: UpdateDocumentaryDto,
  ): Promise<DocumentaryEntity> {
    try {
      await this.findOne(id);
      const data: Partial<DocumentaryEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<DocumentaryEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }
}
