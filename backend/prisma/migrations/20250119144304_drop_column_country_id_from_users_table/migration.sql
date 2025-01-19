/*
  Warnings:

  - You are about to drop the column `countryId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "countryId";

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
