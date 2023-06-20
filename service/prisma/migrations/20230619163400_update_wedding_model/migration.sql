/*
  Warnings:

  - Added the required column `themeData` to the `Wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `themeId` to the `Wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Wedding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wedding" ADD COLUMN     "themeData" JSONB NOT NULL,
ADD COLUMN     "themeId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("themeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
