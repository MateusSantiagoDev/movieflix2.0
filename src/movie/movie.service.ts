import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie-entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly repository: MovieRepository) {}

  create(dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      const data: MovieEntity = { ...dto, id: randomUUID() };
      return this.repository.create(data);
    } catch (err) {}
  }

  findAll(): Promise<MovieEntity[]> {
    try {
      return this.repository.findAll();
    } catch (err) {}
  }

  findOne(id: string): Promise<MovieEntity> {
    try {
      return this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateMovieDto): Promise<MovieEntity> {
    try {
      await this.findOne(id);
      const data: Partial<MovieEntity> = { ...dto };
      return await this.repository.update(data);
    } catch (err) {}
  }

  async delete(id: string): Promise<MovieEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
