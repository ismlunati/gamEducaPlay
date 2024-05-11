import { ArtefactoLogro } from "../../artefactos/model/ArtefactoLogro";
import { Reto } from "../../retos/model/Reto";

export interface Logro {
    id:number;
    nombre:string;
    descripcion:string;
    imagen?:string;
    retos:Reto[];
    artefactoLogros:ArtefactoLogro


}
