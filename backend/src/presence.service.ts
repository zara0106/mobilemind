import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Presence,Prisma} from "@prisma/client";



@Injectable()
export class PresenceService{
    constructor(private prisma: PrismaService) {}

    async createPresence(data: Prisma.PresenceCreateInput) :Promise<Presence>{
        return this.prisma.presence.create({
            data,
        })
    }
}