import { Injectable } from "@nestjs/common";
import { Exceptions } from "src/utils/exceptions/exception.class";
import { Exception } from "src/utils/exceptions/exception.types";
import { MoviePatternEntity } from "./entities/movieflix-pattern.entity";
import { MoviePatternRepository } from "./movieflix-pattern.repository";

@Injectable()
export class MoviePatternService {
    constructor(private readonly repository: MoviePatternRepository) {}

    async findAll(): Promise<MoviePatternEntity[]> {
        try {
          return await this.repository.findAll();
        } catch (err) {
          throw new Exceptions(Exception.UnprocessableEntityException);
        }
      }
    
      async findOne(id: string): Promise<MoviePatternEntity> {
        try {
            return await this.repository.findOne(id)
        } catch (err) {
            throw new Exceptions(Exception.NotFoundException)
        }
      }
}