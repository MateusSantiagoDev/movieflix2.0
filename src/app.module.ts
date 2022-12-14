import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentaryModule } from './documentary/documentary.module';
import { DrawingModule } from './drawing/drawing.module';
import { MovieModulo } from './movie/movie.module';
import { MovieBasicModule } from './movieflix-basic/movieflix-basic.module';
import { MoviePatternModule } from './movieflix-pattern/movieflix-pattern.module';
import { MoviePremiumModule } from './movieflix-premium/movieflix-premium.module';
import { PrismaModule } from './prisma/prisma.module';
import { SerieModule } from './serie/serie.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,  
    MovieModulo,
    SerieModule,
    DrawingModule,
    DocumentaryModule,
    MovieBasicModule,
 /*    MoviePatternModule,
    MoviePremiumModule, */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
