import { OmitType } from "@nestjs/mapped-types";
import { BeasiswaEntity } from "../entities/beasiswa.entity";

export class CreateBeasiswaDto extends OmitType(BeasiswaEntity, [
    'id'
]) {
    nama: string;
    email: string;
    nomorhp: string;
    ipk: number;7
    pilbe: string;
    semester: number;
    upload: string;
}
