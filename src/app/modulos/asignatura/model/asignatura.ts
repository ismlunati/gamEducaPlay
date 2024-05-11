import { AlumnoAsignatura } from "./AlumnoAsignatura";
import { Artefacto } from "../../artefactos/model/Artefacto";
import { Profesor } from "../../usuario/model/Profesor";
import { Tema } from "../../tema/model/Tema";
import { Reto } from "../../retos/model/Reto";


export interface Asignatura {
    id:number;
    nombre:string;
    descripcion:string;
    curso:string;
    codigo?:string;
    profesor?:Profesor;
    artefactos?: Artefacto;
    temas?: Tema;
    alumnoAsignaturas?: AlumnoAsignatura;
    retos?:Reto;

}
