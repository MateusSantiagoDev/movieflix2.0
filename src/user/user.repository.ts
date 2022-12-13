import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserRepository {
    delete(id: string): UserEntity | PromiseLike<UserEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: Partial<UserEntity>): UserEntity | PromiseLike<UserEntity> {
        throw new Error("Method not implemented.");
    }
    findOne(id: any): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(data: UserEntity): Promise<import("./entities/user.entity").UserEntity> {
        throw new Error("Method not implemented.");
    }
    constructor() {}
}