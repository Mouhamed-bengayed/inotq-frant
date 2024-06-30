import { Role } from "./Role";

export class User {
    id?: number;
    name?: string;
    email?: string;
    username?: string;
    password?: string;
  blockedByAdmin?: boolean;
  mailvalid?: boolean;
  Status?: string;
    token?: string;
    refreshToken?: string;
  addresse?: string;
    valid?: boolean;
    number?: string;
    image?: string;
    roles?:Role[]=[];
  date_de_naissance?:Date;
  sexe?:string;
  diplome?:string;
  descreption_Personelle?:string;
  annee_dexperience?:number;
  lieu_deducation?:string;
}
