import { Injectable } from "@nestjs/common";
import { UpdateSerieDto } from "./dto/update-serie.dto";
import { SerieEntity } from "./entities/serie.entity";

@Injectable()
export class SerieRepository {
    delete(id: string): SerieEntity | PromiseLike<SerieEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dto: UpdateSerieDto): Promise<SerieEntity> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<SerieEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<SerieEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(data: SerieEntity): Promise<import("./entities/serie.entity").SerieEntity> {
        throw new Error("Method not implemented.");
    }
    constructor() {}
}