-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gnomon_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    "z" REAL NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_gnomon_R" ("date", "id", "x", "y", "z") SELECT "date", "id", "x", "y", "z" FROM "gnomon_R";
DROP TABLE "gnomon_R";
ALTER TABLE "new_gnomon_R" RENAME TO "gnomon_R";
CREATE UNIQUE INDEX "gnomon_R_date_key" ON "gnomon_R"("date");
CREATE TABLE "new_calc_Dados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    "z" REAL NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_calc_Dados" ("date", "id", "x", "y", "z") SELECT "date", "id", "x", "y", "z" FROM "calc_Dados";
DROP TABLE "calc_Dados";
ALTER TABLE "new_calc_Dados" RENAME TO "calc_Dados";
CREATE UNIQUE INDEX "calc_Dados_date_key" ON "calc_Dados"("date");
CREATE TABLE "new_gnomon_V" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    "z" REAL NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_gnomon_V" ("date", "id", "x", "y", "z") SELECT "date", "id", "x", "y", "z" FROM "gnomon_V";
DROP TABLE "gnomon_V";
ALTER TABLE "new_gnomon_V" RENAME TO "gnomon_V";
CREATE UNIQUE INDEX "gnomon_V_date_key" ON "gnomon_V"("date");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
