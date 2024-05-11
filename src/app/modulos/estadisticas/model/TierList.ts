import { Asignatura } from "../../asignatura/model/asignatura";
import { Tier } from "./Tier";

export interface TierList{

    id:number;
    nombre:string;
    descripcion:string;
    asignatura:Asignatura;
    tiers:Tier[];


}