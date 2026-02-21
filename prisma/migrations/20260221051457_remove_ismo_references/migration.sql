/*
  Warnings:

  - You are about to drop the column `course` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `leads` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "leads" DROP COLUMN "course",
DROP COLUMN "message",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "concern" TEXT,
ADD COLUMN     "preferredDateTime" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "treatment" TEXT,
ALTER COLUMN "source" SET DEFAULT 'Website',
ALTER COLUMN "formName" SET DEFAULT 'Test Ride Booking Form',
ALTER COLUMN "consent" SET DEFAULT true;

-- CreateIndex
CREATE INDEX "leads_formName_idx" ON "leads"("formName");
