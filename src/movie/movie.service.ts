import { Injectable } from "@nestjs/common";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {
    delete(id: string): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dto: UpdateMovieDto): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    create(dto): Promise<import("./entities/movie-entity").MovieEntity> {
        throw new Error("Method not implemented.");
    }
    constructor() {}
}