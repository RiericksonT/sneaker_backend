import { Module } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { SneakersController } from './sneakers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SneakersController],
  providers: [SneakersService, PrismaService],
})
export class SneakersModule {}
