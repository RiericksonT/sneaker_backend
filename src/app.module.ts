import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakersModule } from './sneakers/sneakers.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SneakersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
