import { Alumno } from "../../usuario/model/Alumno";
import { EstadoReportePregunta } from "./EstadoReportePregunta";
import { MotivoReportePregunta } from "./MotivoReportePregunta";
import { Pregunta } from "./Pregunta";

export interface ReportePregunta {
    id: number;
    texto: string;
    motivo: MotivoReportePregunta;
    estado: EstadoReportePregunta;
    pregunta: Pregunta|null;
    alumno: Alumno|null;


  }
  
  