import { Injectable } from "@nestjs/common";
import { MovieEntity } from "./entities/movie-entity";

@Injectable()
export class MovieRepository {
    delete(id: string): Promise<MovieEntity> {
        throw new Error("Method not implemented.");
    }
    update(data: Partial<MovieEntity>): MovieEntity | PromiseLike<MovieEntity> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<MovieEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<MovieEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(data: MovieEntity): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    constructor() {}
}