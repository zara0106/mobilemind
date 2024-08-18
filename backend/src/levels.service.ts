import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Classes, Level, Prisma} from "@prisma/client";

@Injectable()
export class LevelsService {
    constructor(private prisma: PrismaService) {}

    async levels() : Promise<Level[]> {
        return this.prisma.level.findMany()
    }

    async createLevel(data: Prisma.LevelCreateInput): Promise<Level> {
        return this.prisma.level.create({
            data,
        });
    }

    async updateLevel(params: {
        where: Prisma.LevelWhereUniqueInput;
        data: Prisma.LevelUpdateInput;
    }): Promise<Level> {
        const {where, data} = params;
        return this.prisma.level.update({
            data,
            where,
        });
    }

    async deleteLevel(where: Prisma.LevelWhereUniqueInput): Promise<Level>{
        return this.prisma.level.delete({
            where,
        });
    }

}