import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exception.types';
import { CreateMovieBasicDto } from './dto/create-moviebasic.dto';
import { UpdateMovieBasicDto } from './dto/update-moviebasic.dto';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';
import { MovieBasicRepository } from './movieflix-basic.repository';

@Injectable()
export class MovieBasicService {
  constructor(private readonly repository: MovieBasicRepository) {}

  async create(dto: CreateMovieBasicDto) {
    try {
      const id = randomUUID();
      return await this.repository.create(id, dto);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll() {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findOne(id: string) {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateMovieBasicDto) {
    try {
      await this.findOne(id);
      return await this.repository.update(id, dto);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string) {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }
}
