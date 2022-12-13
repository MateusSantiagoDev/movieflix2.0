import { Module } from '@nestjs/common';
import { PatternService } from './pattern.service';
import { PatternController } from './pattern.controller';
import { PatternRepository } from './pattern.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PatternController],
  providers: [PatternService, PatternRepository]
})
export class PatternModule {}
