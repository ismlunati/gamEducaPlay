import { Artefacto } from "../model/Artefacto";
import { Logro } from "../../logros/model/Logro";

export interface ArtefactoLogro {
    artefacto:Artefacto;
    logro:Logro;
    desbloquear:boolean;
    obtener:boolean;


}
