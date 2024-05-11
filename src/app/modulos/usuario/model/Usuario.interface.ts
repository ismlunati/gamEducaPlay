import { Rol } from "./rol";

export interface Usuario {

    id:number;
    nombre:string;
    nombreUsuario:string;
    password:string;
    email:string;
    roles:Rol[];


}
