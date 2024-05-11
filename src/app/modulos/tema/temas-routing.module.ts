import { RouterModule, Routes } from "@angular/router";
import { TemasComponent } from "./temas.component";
import { ListadoTemasComponent } from "./listado-temas/listado-temas.component";
import { CrearPreguntaComponent } from "./crear-pregunta/crear-pregunta.component";
import { AnadirTemaComponent } from "./anadir-tema/anadir-tema.component";
import { NgModule } from "@angular/core";
// Asegúrate de que tienes la siguiente línea en la parte superior de tu archivo:

// temas-routing.module.ts
export const temasRoutes: Routes = [
    {
      path: '',
      component: TemasComponent,
      children: [
        { path: 'listado', component: ListadoTemasComponent },
        { path: ':id/crearPregunta', component: CrearPreguntaComponent },
        { path: 'añadir', component: AnadirTemaComponent },
        { path: ':id/editar', component: AnadirTemaComponent },
        // ... otras rutas relacionadas ...
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(temasRoutes)],
    exports: [RouterModule]
  })
  export class TemasRoutingModule { }
  