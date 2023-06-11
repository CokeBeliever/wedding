-- CreateTable
CREATE TABLE "Theme" (
    "themeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "coverImageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("themeId")
);

-- CreateTable
CREATE TABLE "Wedding" (
    "weddingId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wedding_pkey" PRIMARY KEY ("weddingId")
);

-- CreateTable
CREATE TABLE "WeddingMessage" (
    "widdingMessageId" SERIAL NOT NULL,
    "weddingId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeddingMessage_pkey" PRIMARY KEY ("widdingMessageId")
);

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "File"("fileId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingMessage" ADD CONSTRAINT "WeddingMessage_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("weddingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeddingMessage" ADD CONSTRAINT "WeddingMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
