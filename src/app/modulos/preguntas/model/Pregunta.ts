import { Respuesta } from "./Respuesta";

export interface Pregunta {
  id: number;
  enunciado: string;
  respuestas: Respuesta[];
  // otros campos si es necesario
}

