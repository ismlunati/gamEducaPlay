import { Alumno } from "../../usuario/model/Alumno";

export interface Tier{


    id:number;
    nombre:string;
    color:string;
    alumnos:Alumno[];


}