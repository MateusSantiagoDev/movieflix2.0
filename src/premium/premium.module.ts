import { Module } from '@nestjs/common';
import { PremiumService } from './premium.service';
import { PremiumController } from './premium.controller';
import { PremiumRepository } from './premium.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PremiumController],
  providers: [PremiumService, PremiumRepository]
})
export class PremiumModule {}
