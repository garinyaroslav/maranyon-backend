/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "PRODUCTS" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT[],
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "PRODUCTS_pkey" PRIMARY KEY ("id")
);
