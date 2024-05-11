import { Tema } from "../../tema/model/Tema";
import { EstadisticasAlumnosPreguntas } from "./EstadisticasAlumnosPreguntas";

export interface EstadisticasPreguntasPorTemasDTO {

    tema:Tema;
    estadisticas:EstadisticasAlumnosPreguntas[];
    



}
