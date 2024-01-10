import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { UpdateSneakerDto } from './dto/update-sneaker.dto';
import { Prisma } from '@prisma/client';

@Controller('sneakers')
export class SneakersController {
  constructor(private readonly sneakersService: SneakersService) {}

  @Post()
  create(@Body() createSneakerDto: Prisma.SneakerCreateInput) {
    try {
      return this.sneakersService.create(createSneakerDto);
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }

  @Get()
  findAll() {
    return this.sneakersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sneakersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSneakerDto: UpdateSneakerDto) {
    return this.sneakersService.update(+id, updateSneakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sneakersService.remove(+id);
  }
}
