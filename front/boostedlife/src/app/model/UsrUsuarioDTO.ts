import { UsrRolDTO } from "./UsrRolDTO";

export class UsrUsuarioDTO {
    public  idUsuario: number;
    public  nombres: string;
    public  apellidos: string;
    public  nombreUsuario: string;
    public  contrasena: string;
    public  identifier: string;
    public roles: Array<UsrRolDTO>;
}
