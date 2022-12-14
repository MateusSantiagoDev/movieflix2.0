import { Injectable } from "@nestjs/common";
import { CreateSerieDto } from "./dto/create-serie.dto";
import { UpdateSerieDto } from "./dto/update-serie.dto";

@Injectable()
export class SerieService {
    delete(id: string): Promise<import("./entities/serie.entity").SerieEntity> {
        throw new Error('Method not implemented.');
    }
    update(id: string, dto: UpdateSerieDto): Promise<import("./entities/serie.entity").SerieEntity> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<import("./entities/serie.entity").SerieEntity> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<import("./entities/serie.entity").SerieEntity[]> {
        throw new Error('Method not implemented.');
    }
    create(dto: CreateSerieDto): Promise<import("./entities/serie.entity").SerieEntity> {
        throw new Error("Method not implemented.");
    }
    constructor() {}
}