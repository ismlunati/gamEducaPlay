import { Alumno } from "../../usuario/model/Alumno";
import { TierList } from "./TierList";

export interface ListaAlumnosAndTierListDTO {

    listaAlumnos:Alumno[];
    tierList: TierList;

}