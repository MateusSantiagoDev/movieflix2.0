import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlanModule } from './plan/plan.module';
import { BasicModule } from './basic/basic.module';
import { PatternModule } from './pattern/pattern.module';
import { PremiumModule } from './premium/premium.module';
import { MovieModulo } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [UserModule, PrismaModule, PlanModule, BasicModule, PatternModule, PremiumModule, MovieModulo, SerieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
