/*
  Warnings:

  - You are about to drop the column `nameTeacher` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `firstNameTeacher` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastNameTeacher` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Teacher` DROP COLUMN `nameTeacher`,
    ADD COLUMN `firstNameTeacher` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastNameTeacher` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Presence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creneauId` INTEGER NULL,
    `studentsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Presence` ADD CONSTRAINT `Presence_creneauId_fkey` FOREIGN KEY (`creneauId`) REFERENCES `Creneau`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presence` ADD CONSTRAINT `Presence_studentsId_fkey` FOREIGN KEY (`studentsId`) REFERENCES `Student`(`matriculate`) ON DELETE SET NULL ON UPDATE CASCADE;
