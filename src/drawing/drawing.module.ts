import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { DrawingController } from "./drawing.controller";
import { DrawingRepository } from "./drawing.repository";
import { DrawingService } from "./drawing.service";

@Module({
    imports: [PrismaModule],
    controllers: [DrawingController],
    providers: [DrawingService, DrawingRepository],
})
export class DrawingModule {}