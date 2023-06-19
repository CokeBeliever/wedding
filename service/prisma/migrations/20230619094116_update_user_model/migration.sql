/*
  Warnings:

  - A unique constraint covering the columns `[openid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('H5', 'WEI_XIN', 'APP');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "openid" TEXT,
ADD COLUMN     "platform" "Platform" NOT NULL DEFAULT 'H5',
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_openid_key" ON "User"("openid");
