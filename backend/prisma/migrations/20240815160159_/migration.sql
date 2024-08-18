/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Student` DROP PRIMARY KEY,
    MODIFY `matriculate` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`matriculate`);
