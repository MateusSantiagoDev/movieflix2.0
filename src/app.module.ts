import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './basic/basic.module';
import { DocumentaryModule } from './documentary/documentary.module';
import { DrawingModule } from './drawing/drawing.module';
import { MovieModulo } from './movie/movie.module';
import { PatternModule } from './pattern/pattern.module';
import { PremiumModule } from './premium/premium.module';
import { PrismaModule } from './prisma/prisma.module';
import { SerieModule } from './serie/serie.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,  
    BasicModule,
    PatternModule,
    PremiumModule,
    MovieModulo,
    SerieModule,
    DrawingModule,
    DocumentaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
