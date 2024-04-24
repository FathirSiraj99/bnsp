import { beasiswa as beasiswaModel } from '@prisma/client';

export class BeasiswaEntity implements beasiswaModel {
  email: string;
  id: number;
  ipk: number;
  nama: string;
  nomorhp: string;
  pilbe: string;
  semester: number;
  upload: string;
}
