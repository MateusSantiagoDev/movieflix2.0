import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { DocumentaryController } from "./documentary.controller";
import { DocumentaryRepository } from "./documentary.repository";
import { DocumentaryService } from "./documentary.service";

@Module({
    imports: [PrismaModule],
    controllers: [DocumentaryController],
    providers: [DocumentaryService, DocumentaryRepository],
})
export class DocumentaryModule {}