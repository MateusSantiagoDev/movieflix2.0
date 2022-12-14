import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exception.types';
import { MovieBasicEntity } from './entities/movieflix-basic.entity';
import { MovieBasicRepository } from './movieflix-basic.repository';

@Injectable()
export class MovieBasicService {
  constructor(private readonly repository: MovieBasicRepository) {}

  async findAll(): Promise<MovieBasicEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findOne(id: string): Promise<MovieBasicEntity> {
    try {
        return await this.repository.findOne(id)
    } catch (err) {
        throw new Exceptions(Exception.NotFoundException)
    }
  }
}
