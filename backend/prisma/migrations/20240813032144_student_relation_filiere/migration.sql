/*
  Warnings:

  - The primary key for the `Filiere` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Filiere` DROP PRIMARY KEY,
    MODIFY `abreviation` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`abreviation`);

-- AlterTable
ALTER TABLE `Student` ADD COLUMN `filiereId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_filiereId_fkey` FOREIGN KEY (`filiereId`) REFERENCES `Filiere`(`abreviation`) ON DELETE SET NULL ON UPDATE CASCADE;
