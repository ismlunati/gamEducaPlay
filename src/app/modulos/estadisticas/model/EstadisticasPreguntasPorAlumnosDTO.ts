import { Alumno } from "../../usuario/model/Alumno";
import { EstadisticasTemasPreguntas } from "./EstadisticasTemasPreguntas";

export interface EstadisticasPreguntasPorAlumnosDTO {

    alumno:Alumno;
    estadisticas:EstadisticasTemasPreguntas[];
    



}
