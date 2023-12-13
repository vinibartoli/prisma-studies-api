/*
  Warnings:

  - You are about to drop the column `bar_code` on the `books` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `books_bar_code_key` ON `books`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `bar_code`;
