import { Asignatura } from "../../asignatura/model/asignatura";
import { ArtefactoLogro } from "./ArtefactoLogro";


export interface Artefacto {
    id:number;
    nombre:string;
    descripcion:string;
    costePuntos:number;
    estado:string;
    temporal:boolean;
    repetible:boolean;
    fechaInicio: Date;
    fechaFin: Date;
    asignatura: Asignatura;
    artefactoLogros:ArtefactoLogro[];

}
