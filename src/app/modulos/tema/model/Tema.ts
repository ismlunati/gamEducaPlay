import { Asignatura } from "../../asignatura/model/asignatura";
import { Reto } from "../../retos/model/Reto";

export interface Tema {
    id:number;
    nombre:string;
    descripcion:string;
    asignatura:Asignatura;
    reto:Reto[];

}
