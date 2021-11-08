-- CreateTable
CREATE TABLE "posiSol_V" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_V" REAL NOT NULL,
    "y_V" REAL NOT NULL,
    "z_V" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "gnomon_V" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "posiSol_id" INTEGER NOT NULL,
    CONSTRAINT "gnomon_V_posiSol_id_fkey" FOREIGN KEY ("posiSol_id") REFERENCES "posiSol_V" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "posiGnomon_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lati_R" REAL NOT NULL DEFAULT -29.1018555850,
    "longi_R" REAL NOT NULL DEFAULT -49.6385230231
);

-- CreateTable
CREATE TABLE "posiSol_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_R" REAL NOT NULL,
    "y_R" REAL NOT NULL,
    "z_R" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "gnomon_R" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_R" DATETIME NOT NULL,
    "posiGnomon_R_id" INTEGER NOT NULL,
    "posiSol_R_id" INTEGER NOT NULL,
    CONSTRAINT "gnomon_R_posiGnomon_R_id_fkey" FOREIGN KEY ("posiGnomon_R_id") REFERENCES "posiGnomon_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "gnomon_R_posiSol_R_id_fkey" FOREIGN KEY ("posiSol_R_id") REFERENCES "posiSol_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "calc_Dados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x_Calc" REAL NOT NULL,
    "y_Calc" REAL NOT NULL,
    "z_Calc" REAL NOT NULL,
    "data_Calc" DATETIME NOT NULL,
    "gnomon_V_id" INTEGER NOT NULL,
    "gnomon_R_id" INTEGER NOT NULL,
    CONSTRAINT "calc_Dados_gnomon_V_id_fkey" FOREIGN KEY ("gnomon_V_id") REFERENCES "gnomon_V" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "calc_Dados_gnomon_R_id_fkey" FOREIGN KEY ("gnomon_R_id") REFERENCES "gnomon_R" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
