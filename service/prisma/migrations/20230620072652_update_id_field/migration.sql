/*
  Warnings:

  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fileId` on the `File` table. All the data in the column will be lost.
  - The primary key for the `Theme` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `themeId` on the `Theme` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - The primary key for the `Wedding` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `weddingId` on the `Wedding` table. All the data in the column will be lost.
  - The primary key for the `WeddingMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `widdingMessageId` on the `WeddingMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Theme" DROP CONSTRAINT "Theme_coverImageId_fkey";

-- DropForeignKey
ALTER TABLE "Wedding" DROP CONSTRAINT "Wedding_themeId_fkey";

-- DropForeignKey
ALTER TABLE "Wedding" DROP CONSTRAINT "Wedding_userId_fkey";

-- DropForeignKey
ALTER TABLE "WeddingMessage" DROP CONSTRAINT "WeddingMessage_userId_fkey";

-- DropForeignKey
ALTER TABLE "WeddingMessage" DROP CONSTRAINT "WeddingMessage_weddingId_fkey";

-- AlterTable
ALTER TABLE "File" DROP CONSTRAINT "File_pkey",
DROP COLUMN "fileId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "File_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Theme" DROP CONSTRAINT "Theme_pkey",
DROP COLUMN "themeId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Theme_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Wedding" DROP CONSTRAINT "Wedding_pkey",
DROP COLUMN "weddingId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Wedding_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WeddingMessage" DROP CONSTRAINT "WeddingMessage_pkey",
DROP COLUMN "widdingMessageId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WeddingMessage_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wedding" ADD CONSTRAINT "Wedding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingMessage" ADD CONSTRAINT "WeddingMessage_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingMessage" ADD CONSTRAINT "WeddingMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
