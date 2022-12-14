import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { MovieBasicController } from "./movieflix-basic.controller";
import { MovieBasicRepository } from "./movieflix-basic.repository";
import { MovieBasicService } from "./movieflix-basic.service";

@Module({
    imports: [PrismaModule],
    controllers: [MovieBasicController],
    providers: [MovieBasicService, MovieBasicRepository],
})
export class MovieBasicModule {}