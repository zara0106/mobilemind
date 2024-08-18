import { ApiProperty } from '@nestjs/swagger';
import { appendFile } from 'fs';

export class CreateLevelDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nameLevel: string;
}

export class CreateCreneauDto {
  @ApiProperty()
  time: string;

  @ApiProperty()
  Date: Date;

  @ApiProperty()
  classesId: number;
}

export class UpdateLevelDto {
  @ApiProperty()
  nameLevel?: string;
}

export class CreateFiliereDto {
  @ApiProperty()
  abreviation: string;

  @ApiProperty()
  extension: string;
}

export class CreatePresenceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  creneauId: number;

  @ApiProperty()
  studentsId: string;

  @ApiProperty()
  present: boolean;
}

export class UpdateCreneauDto {
  @ApiProperty()
  time: string;

  @ApiProperty()
  Date: Date;
}
export class UpdateFiliereDto {
  @ApiProperty()
  extension?: string;
}

export class CreateClasseDto {
  @ApiProperty()
  nameClasses: string;
}

export class UpdateClasseDto {
  @ApiProperty()
  nameClasses?: string;
}

export class UpdateStudentDto {
  @ApiProperty()
  email?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  birthDate?: Date;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  levelId?: number;

  @ApiProperty()
  filiereId?: string;
}

export class CreateStudentDto {
  @ApiProperty()
  matriculate: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  levelId?: number;

  @ApiProperty()
  filiereId?: string;
}
