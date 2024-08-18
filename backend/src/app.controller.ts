import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Level, Student } from '@prisma/client';
import { Filiere} from '@prisma/client';
import { FiliereService } from './filiere.service';
import { Classes} from '@prisma/client';
import { ClassesService } from './classes.service';
import { LevelsService } from './levels.service';
import { CreateFiliereDto, CreateLevelDto ,CreateClasseDto,UpdateLevelDto,UpdateFiliereDto, UpdateClasseDto, CreateStudentDto,UpdateStudentDto, CreateCreneauDto, UpdateCreneauDto, CreatePresenceDto} from './types';
import { materialize } from 'rxjs';
import { Creneau} from '@prisma/client';
import { CreneauService } from './creneau.service';
import { PresenceService } from './presence.service';

@Controller()
export class AppController {
  constructor(
    private readonly studentService  : StudentService,
    private readonly filiereService  : FiliereService,
    private readonly classesService  : ClassesService,
    private readonly levelsService   : LevelsService,
    private readonly creneauService  :CreneauService,
    private readonly presenceService :PresenceService,
  ) {}

  @Get('students')
  getStudents(): Promise<Student[]> {
    return this.studentService.students();
  }

  @Get('filieres')
  getFiliere(): Promise<Filiere[]> {
    return this.filiereService.filiere();
  }

  @Get('classes')
  getClasses(): Promise<Classes[]> {
    return this.classesService.classes();
  }

  @Get('levels')
  getLevels() : Promise<Level[]> {
    return this.levelsService.levels();
  }

  @Get('creneau')
  getCreneau(): Promise<Creneau[]> {
    return this.creneauService.creneau();
  }



  @Post('student')
  createStudent(@Body() createStudent: CreateStudentDto){
  return this.studentService.createStudents(createStudent)
  }

  @Post('level')
  createLevel(@Body() createlevel: CreateLevelDto){
    return this.levelsService.createLevel(createlevel)
  }

  @Post('filiere')
  createFilieres(@Body() createfiliere: CreateFiliereDto){
    return this.filiereService.createFilieres(createfiliere)
  }

  @Post('classe')
  createClasse(@Body() createClasse: CreateClasseDto){
    return this.classesService.createClasse(createClasse)
  }

  @Post('creneau')
  createCreneau(@Body() createCreneau: CreateCreneauDto){
    return this.creneauService.createCreneau(createCreneau)
  }

  @Post('presence')
  createPresence(@Body() createPresence: CreatePresenceDto){
    return this.presenceService.createPresence(createPresence)
  }

  @Put('level/:id')
  updatelevel(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto){
    return this.levelsService.updateLevel({where : {id : Number(id)}, data : updateLevelDto})
  }

  @Put('filiere/:abreviation')
  updatefiliere(@Param('abreviation') abreviation: string, @Body() updateFiliereDto: UpdateFiliereDto){
    return this.filiereService.updateFiliere({where: {abreviation}, data:  updateFiliereDto})
  }

  @Put('classes/:id')
  updateclasse(@Param("id") id: string, @Body() updateClasseDto: UpdateClasseDto){
    return this.classesService.updateClasses({where: {id: Number(id)}, data : updateClasseDto})
  }

  @Put('student/:matriculate')
  updatestudent(@Param("matriculate") matriculate: string, @Body() updatestudentDto: UpdateStudentDto){
    return this.studentService.updateStudent({where: {matriculate}, data: updatestudentDto})
  }

  @Put('creneau/:id')
  updatecreneau(@Param('id') id:string, @Body() updatecreneauDto: UpdateCreneauDto){
    return this.creneauService.updateCreneau({where: {id:Number(id)}, data: updatecreneauDto})
  }

  @Delete('level/:id')
  removelevel(@Param('id') id: string){
    return this.levelsService.deleteLevel({id : Number(id)})
  }

  @Delete('filiere/:abreviation')
  removefiliere(@Param('abreviation') abreviation:string){
    return this.filiereService.deleteFiliere({abreviation:(abreviation)})
  }

  @Delete('classes/:id')
  removeclasses(@Param('id') id:string){
    return this.classesService.deleteClasses({id: Number(id)})
  }

  @Delete('student/:matriculate')
  removestudent(@Param('matriculate') matriculate:string){
    return this.studentService.deleteStudent({matriculate:(matriculate)})
  }

  @Delete('creneau/:id')
  removecreneau(@Param('id') id:string){
    return this.creneauService.deleteCreneau({id:Number(id)})
  }
}
