import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma, Student } from "@prisma/client";

@Injectable()
export class StudentService {
    constructor(private prisma: PrismaService) {}

    async students() : Promise<Student[]> {
        return this.prisma.student.findMany({
            select : {
                matriculate : true,
                birthDate : true,
                email : true,
                firstName : true,
                lastName : true,
                levelId : true,
                phone : true,
                level : true,
                filiere : true,
                filiereId : true,
                presence: {
                  select : {
                    creneau : {
                        select:{
                            classesId:true,
                            classes: {
                                select:{
                                    nameClasses :true
                                }
                            }
                        }
                    },
                    present : true
                  }  
                },
            }
        })
    }

    async createStudents(data: Prisma.StudentCreateInput): Promise<Student> {
        return this.prisma.student.create({
            data,
        });
    }

    async updateStudent(params:{
        where: Prisma.StudentWhereUniqueInput;
        data: Prisma.StudentUpdateInput;
    }): Promise<Student> {
        const {where, data} = params;
        return this.prisma.student.update({
            data,
            where,
        });
    }

    async deleteStudent(where: Prisma.StudentWhereUniqueInput): Promise<Student>{
        return this.prisma.student.delete({
            where,
        })
    }


}