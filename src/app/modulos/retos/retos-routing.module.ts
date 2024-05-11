import { RouterModule, Routes } from "@angular/router";
import { AnadirRetosComponent } from "./anadir-retos/anadir-retos.component";
import { ListadoRetosComponent } from "./listado-retos/listado-retos.component";
import { RetosComponent } from "./retos.component";
import { NgModule } from "@angular/core";


export const retosRoutes: Routes = [
    {
        path: '',
        component: RetosComponent,
        children: [
            {   path: 'listado',    component: ListadoRetosComponent   },
            {   path: 'añadir',     component: AnadirRetosComponent    },
            {   path: ':id/editar', component: AnadirRetosComponent    },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(retosRoutes)],
    exports: [RouterModule]
  })
  export class RetosRoutingModule { }