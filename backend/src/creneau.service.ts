import { Injectable } from '@nestjs/common';
import { Creneau, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class CreneauService {
  constructor(private prisma: PrismaService) {}

  async creneau(): Promise<Creneau[]> {
    return this.prisma.creneau.findMany({
      select: {
        id: true,
        Date: true,
        classesId: true,
        time: true,
        classes: {
          select: {
            id: true,
            nameClasses: true,
          },
        },
      },
    });
  }

  async createCreneau(data: Prisma.CreneauCreateInput): Promise<Creneau> {
    return this.prisma.creneau.create({
      data,
    });
  }

  async updateCreneau(params: {
    where: Prisma.CreneauWhereUniqueInput;
    data: Prisma.CreneauUpdateInput;
  }): Promise<Creneau> {
    const { where, data } = params;
    return this.prisma.creneau.update({
      data,
      where,
    });
  }

  async deleteCreneau(where: Prisma.CreneauWhereUniqueInput): Promise<Creneau> {
    return this.prisma.creneau.delete({
      where,
    });
  }
}
