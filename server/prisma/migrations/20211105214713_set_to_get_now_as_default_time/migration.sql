-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gnomon_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_R" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "posiGnomon_R_id" INTEGER NOT NULL,
    "posiSol_R_id" INTEGER NOT NULL,
    CONSTRAINT "gnomon_R_posiGnomon_R_id_fkey" FOREIGN KEY ("posiGnomon_R_id") REFERENCES "posiGnomon_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "gnomon_R_posiSol_R_id_fkey" FOREIGN KEY ("posiSol_R_id") REFERENCES "posiSol_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_gnomon_R" ("data_R", "id", "posiGnomon_R_id", "posiSol_R_id") SELECT "data_R", "id", "posiGnomon_R_id", "posiSol_R_id" FROM "gnomon_R";
DROP TABLE "gnomon_R";
ALTER TABLE "new_gnomon_R" RENAME TO "gnomon_R";
CREATE TABLE "new_calc_Dados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_Calc" REAL NOT NULL,
    "y_Calc" REAL NOT NULL,
    "z_Calc" REAL NOT NULL,
    "data_Calc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gnomon_V_id" INTEGER NOT NULL,
    "gnomon_R_id" INTEGER NOT NULL,
    CONSTRAINT "calc_Dados_gnomon_V_id_fkey" FOREIGN KEY ("gnomon_V_id") REFERENCES "gnomon_V" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "calc_Dados_gnomon_R_id_fkey" FOREIGN KEY ("gnomon_R_id") REFERENCES "gnomon_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_calc_Dados" ("data_Calc", "gnomon_R_id", "gnomon_V_id", "id", "x_Calc", "y_Calc", "z_Calc") SELECT "data_Calc", "gnomon_R_id", "gnomon_V_id", "id", "x_Calc", "y_Calc", "z_Calc" FROM "calc_Dados";
DROP TABLE "calc_Dados";
ALTER TABLE "new_calc_Dados" RENAME TO "calc_Dados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
