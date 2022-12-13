import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PremiumService } from './premium.service';
import { CreatePremiumDto } from './dto/create-premium.dto';
import { UpdatePremiumDto } from './dto/update-premium.dto';

@Controller('premium')
export class PremiumController {
  constructor(private readonly premiumService: PremiumService) {}

  @Post()
  create(@Body() createPremiumDto: CreatePremiumDto) {
    return this.premiumService.create(createPremiumDto);
  }

  @Get()
  findAll() {
    return this.premiumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.premiumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePremiumDto: UpdatePremiumDto) {
    return this.premiumService.update(+id, updatePremiumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.premiumService.remove(+id);
  }
}
