/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `priceEuro` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceLek` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
ADD COLUMN     "priceEuro" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceLek" DOUBLE PRECISION NOT NULL;
