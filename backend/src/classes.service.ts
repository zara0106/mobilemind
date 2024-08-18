import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Classes, Prisma} from "@prisma/client";

@Injectable()
export class ClassesService {
    constructor(private prisma: PrismaService) {}

    async classes() : Promise<Classes[]> {
        return this.prisma.classes.findMany()
    }

    async createClasse(data: Prisma.ClassesCreateInput) :Promise<Classes>{
        return this.prisma.classes.create({
            data,
        });
    }

    async updateClasses(params: {
        where: Prisma.ClassesWhereUniqueInput;
        data: Prisma.ClassesUpdateInput;
        
    }): Promise<Classes> {
        const{where, data}=params;
        return this.prisma.classes.update({
            data,
            where,
        })
    }

    async deleteClasses(where: Prisma.ClassesWhereUniqueInput): Promise<Classes>{
        return this.prisma.classes.delete({
            where,
        })
    }

}