export interface Medecin {
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
    refreshToken :string;
    addresse: string;
    date: string;
    valid: boolean;
    bannedchatGP: boolean;
    number: number;
    image: string;
    role:{ id: number; name: string; }[];
}