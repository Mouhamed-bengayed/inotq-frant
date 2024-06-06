﻿export interface Medecin {
    id: Number;
    name: string;
    email: string;
    username: string;
    specialite: string;
    password: string;
    blocked: boolean;
    Role: string;
    token: string;
    refreshToken :string;
    addresse: string;
    valid: boolean;
    bannedchatGP: boolean;
    number: number;
    image: string;
    role:{ id: number; name: string; }[];
}