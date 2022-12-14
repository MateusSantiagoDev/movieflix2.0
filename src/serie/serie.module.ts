import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SerieController } from "./serie.controller";
import { SerieRepository } from "./serie.repository";
import { SerieService } from "./serie.service";

@Module({
    imports: [PrismaModule],
    controllers: [SerieController],
    providers: [SerieService, SerieRepository],
})
export class SerieModule {}