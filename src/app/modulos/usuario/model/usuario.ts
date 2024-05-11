import { Rol } from "./rol";

export class Usuario{
  id!:number;
  nombreUsuario!:string;
  password!:string;
  nombre!:string;
  email!:string;
  roles!:Set<Rol>;
  new!:boolean;


}
