-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "profileImgUrl" TEXT NOT NULL DEFAULT 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
