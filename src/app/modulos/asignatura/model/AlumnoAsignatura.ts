import { Asignatura } from "./asignatura";
import { Alumno } from "../../usuario/model/Alumno";

export interface AlumnoAsignatura {

    estado:string;
    puntos:number;
    alumno:Alumno;
    asingatura:Asignatura;


}
