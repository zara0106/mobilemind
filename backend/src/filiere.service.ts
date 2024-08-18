import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Classes,Filiere ,Prisma} from "@prisma/client";

@Injectable()
export class FiliereService {
    constructor(private prisma: PrismaService) {}

    async filiere() : Promise<Filiere[]> {
        return this.prisma.filiere.findMany()
    }

    async createFilieres(data: Prisma.FiliereCreateInput) :Promise<Filiere>{
        return this.prisma.filiere.create({
            data,
        });
    }

    async updateFiliere (params: {
        where:Prisma.FiliereWhereUniqueInput;
        data: Prisma.FiliereUpdateInput;
    }): Promise<Filiere>{
        const {where, data} = params;
        return this.prisma.filiere.update({
            data,
            where,
        });
    }

    async deleteFiliere(where: Prisma.FiliereWhereUniqueInput): Promise<Filiere>{
        return this.prisma.filiere.delete({
            where,
        })
    }

}