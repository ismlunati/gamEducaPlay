import { Asignatura } from "../../asignatura/model/asignatura";
import { Usuario } from "./Usuario.interface";

export interface Profesor {

    usuario:Usuario;
    asignaturas:Asignatura[];


}
