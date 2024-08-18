import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StudentService } from './student.service';
import { PrismaService } from './prisma.service';
import { FiliereService } from './filiere.service';
import { ClassesService } from './classes.service';
import { LevelsService } from './levels.service';
import { CreneauService } from './creneau.service';
import { PresenceService } from './presence.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, StudentService, FiliereService,ClassesService, LevelsService,CreneauService, PresenceService],
})
export class AppModule {}
