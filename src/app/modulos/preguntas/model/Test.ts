export interface Test {
    id?: number;  // Este campo es opcional porque normalmente se genera en el backend
    nombre: string;
    descripcion?: string;  // Este campo es opcional
    numeroPreguntas: number;
    listaTemas?: string;  // Este campo es opcional
    visible: boolean;
    preguntasElegibles: boolean;
    fechaInicio?: Date;  // Este campo es opcional
    fechaFin?: Date;  // Este campo es opcional
    asignaturaId?: number;  // Este campo es opcional, pero si tienes el ID de la asignatura puedes incluirlo aquí
  }
  