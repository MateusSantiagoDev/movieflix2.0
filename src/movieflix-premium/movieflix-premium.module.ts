import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { MoviePremiumController } from "./movieflix-premium.controller";
import { MoviePremiumRepository } from "./movieflix-premium.repository";
import { MoviePremiumService } from "./movieflix-premium.service";

@Module({
    imports: [PrismaModule],
    controllers: [MoviePremiumController],
    providers: [MoviePremiumService, MoviePremiumRepository],
})
export class MoviePremiumModule {}