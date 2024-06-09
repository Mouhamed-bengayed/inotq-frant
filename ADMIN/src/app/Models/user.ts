import { Role } from "./Role";

export class User {
    id?: number;
    name?: string;
    email?: string;
    username?: string;
    password?: string;
    blocked?: boolean;
    Role?: string;
    token?: string;
    refreshToken?: string;
    address?: string;
    valid?: boolean;
    number?: string;
    image?: string;
    roles?:Role[]=[];
    
}