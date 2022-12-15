import { Module } from '@nestjs/common';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';
import { BasicRepository } from './basic.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BasicController],
  providers: [BasicService, BasicRepository],
})
export class BasicModule {}
