-- AlterTable
ALTER TABLE `Creneau` ADD COLUMN `classesId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Creneau` ADD CONSTRAINT `Creneau_classesId_fkey` FOREIGN KEY (`classesId`) REFERENCES `Classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
