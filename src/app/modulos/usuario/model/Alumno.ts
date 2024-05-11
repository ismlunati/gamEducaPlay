import { Usuario } from './Usuario.interface';
import { AlumnoAsignatura } from "../../asignatura/model/AlumnoAsignatura";

export interface Alumno {

    id:number;
    usuario:Usuario;
    alumnoAsignaturas:AlumnoAsignatura;


}
