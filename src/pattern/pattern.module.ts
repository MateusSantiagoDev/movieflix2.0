import { Module } from '@nestjs/common';
import { PatternService } from './pattern.service';
import { PatternController } from './pattern.controller';

@Module({
  controllers: [PatternController],
  providers: [PatternService]
})
export class PatternModule {}
