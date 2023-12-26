-- CreateTable
CREATE TABLE "Sneaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "position" INTEGER NOT NULL
);
