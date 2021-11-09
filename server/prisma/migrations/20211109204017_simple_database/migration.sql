/*
  Warnings:

  - You are about to drop the `posiGnomon_R` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posiSol_R` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posiSol_V` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `data_R` on the `gnomon_R` table. All the data in the column will be lost.
  - You are about to drop the column `posiGnomon_R_id` on the `gnomon_R` table. All the data in the column will be lost.
  - You are about to drop the column `posiSol_R_id` on the `gnomon_R` table. All the data in the column will be lost.
  - You are about to drop the column `data_Calc` on the `calc_Dados` table. All the data in the column will be lost.
  - You are about to drop the column `gnomon_R_id` on the `calc_Dados` table. All the data in the column will be lost.
  - You are about to drop the column `gnomon_V_id` on the `calc_Dados` table. All the data in the column will be lost.
  - You are about to drop the column `posiSol_id` on the `gnomon_V` table. All the data in the column will be lost.
  - Added the required column `x_R` to the `gnomon_R` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y_R` to the `gnomon_R` table without a default value. This is not possible if the table is not empty.
  - Added the required column `z_R` to the `gnomon_R` table without a default value. This is not possible if the table is not empty.
  - Added the required column `x_V` to the `gnomon_V` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y_V` to the `gnomon_V` table without a default value. This is not possible if the table is not empty.
  - Added the required column `z_V` to the `gnomon_V` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "posiGnomon_R";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "posiSol_R";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "posiSol_V";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gnomon_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_R" REAL NOT NULL,
    "y_R" REAL NOT NULL,
    "z_R" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_gnomon_R" ("id") SELECT "id" FROM "gnomon_R";
DROP TABLE "gnomon_R";
ALTER TABLE "new_gnomon_R" RENAME TO "gnomon_R";
CREATE TABLE "new_calc_Dados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_Calc" REAL NOT NULL,
    "y_Calc" REAL NOT NULL,
    "z_Calc" REAL NOT NULL,
    "date_Calc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_calc_Dados" ("id", "x_Calc", "y_Calc", "z_Calc") SELECT "id", "x_Calc", "y_Calc", "z_Calc" FROM "calc_Dados";
DROP TABLE "calc_Dados";
ALTER TABLE "new_calc_Dados" RENAME TO "calc_Dados";
CREATE TABLE "new_gnomon_V" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_V" REAL NOT NULL,
    "y_V" REAL NOT NULL,
    "z_V" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_gnomon_V" ("id") SELECT "id" FROM "gnomon_V";
DROP TABLE "gnomon_V";
ALTER TABLE "new_gnomon_V" RENAME TO "gnomon_V";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
