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
