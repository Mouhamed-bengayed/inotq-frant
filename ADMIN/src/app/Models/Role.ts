export enum RoleName {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_PATIENT = 'ROLE_PATIENT',
    ROLE_MEDECIN = 'ROLE_MEDECIN',
    
}

export class Role {
    id?: number;
    name!: RoleName;


}