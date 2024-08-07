﻿export interface Medecin {
    id: Number;
    name: string;
    email: string;
    username: string;
    specialite: string;
    password: string;
    blocked: boolean;
    blockedByAdmin: boolean;
    Role: string;
    token: string;
    Status:boolean;
    status: string;
    refreshToken :string;
    addresse: string;
    date: string;
    valid: boolean;
    bannedchatGP: boolean;
  validtologin: boolean;
  askForReactivation:boolean
    number: number;
    image: string;
    role:{ id: number; name: string; }[];
}
