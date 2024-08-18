/*
  Warnings:

  - Added the required column `present` to the `Presence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Presence` ADD COLUMN `present` BOOLEAN NOT NULL;
