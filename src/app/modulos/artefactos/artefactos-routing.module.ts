import { RouterModule, Routes } from "@angular/router";
import { AnadirArtefactosComponent } from "./anadir-artefactos/anadir-artefactos.component";
import { ArtefactosComponent } from "./artefactos.component";
import { ListadoArtefactosComponent } from "./listado-artefactos/listado-artefactos.component";
import { NgModule } from "@angular/core";







export const artefactoRoutes: Routes = [
    {
        path: '',
        component: ArtefactosComponent,
        children: [
            { path: 'listado', component: ListadoArtefactosComponent },
            { path: 'añadir', component: AnadirArtefactosComponent },
            { path: ':id/editar', component: AnadirArtefactosComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(artefactoRoutes)],
    exports: [RouterModule]
  })
  export class ArtefactosRoutingModule { }
  