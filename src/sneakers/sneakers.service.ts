import { Injectable } from '@nestjs/common';
import { UpdateSneakerDto } from './dto/update-sneaker.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SneakersService {
  constructor(private prisma: PrismaService) {}

  create(createSneakerDto: Prisma.SneakerCreateInput) {
    return this.prisma.sneaker.create({
      data: createSneakerDto,
    });
  }

  findAll() {
    return this.prisma.sneaker.findMany();
  }

  findOne(id: number) {
    return this.prisma.sneaker
      .findUnique({
        where: { id },
      })
      .catch(e => {
        console.error(e);
        throw e;
      })
      .then(sneaker => {
        if (!sneaker) {
          throw new Error('Sneaker not found');
        }
        return sneaker;
      });
  }

  update(id: number, updateSneakerDto: UpdateSneakerDto) {
    return this.prisma.sneaker.update({
      where: { id },
      data: updateSneakerDto,
    });
  }

  remove(id: number) {
    return this.prisma.sneaker.delete({
      where: { id },
    });
  }
}
