import { Injectable } from "@nestjs/common";
import { BasicEntity } from "./entities/basic.entity";

@Injectable()
export class BasicRepository {
    delete(id: string): BasicEntity | PromiseLike<BasicEntity> {
      throw new Error('Method not implemented.');
    }
    update(id: string, data: Partial<BasicEntity>): BasicEntity | PromiseLike<BasicEntity> {
      throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<BasicEntity> {
      throw new Error('Method not implemented.');
    }
    findAll(): Promise<BasicEntity[]> {
      throw new Error('Method not implemented.');
    }
    create(data: BasicEntity): Promise<import("./entities/basic.entity").BasicEntity> {
      throw new Error('Method not implemented.');
    }
    constructor() {}
}