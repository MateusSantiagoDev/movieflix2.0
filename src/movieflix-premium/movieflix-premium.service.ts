import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exception.types';
import { MoviePremiumEntity } from './entities/movieflix-premium.entity';
import { MoviePremiumRepository } from './movieflix-premium.repository';

@Injectable()
export class MoviePremiumService {
  constructor(private readonly repository: MoviePremiumRepository) {}

  async findAll(): Promise<MoviePremiumEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findOne(id: string): Promise<MoviePremiumEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
