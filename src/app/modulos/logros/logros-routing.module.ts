import { RouterModule, Routes } from "@angular/router";
import { AnadirLogrosComponent } from "./anadir-logros/anadir-logros.component";
import { ListadoLogrosComponent } from "./listado-logros/listado-logros.component";
import { LogrosComponent } from "./logros.component";
import { NgModule } from "@angular/core";


export const logrosRoutes: Routes = [
    {
        path: '',
        component: LogrosComponent,
        children: [


            { path: 'listado', component: ListadoLogrosComponent },
            { path: 'añadir', component: AnadirLogrosComponent },
            { path: ':id/editar', component: AnadirLogrosComponent }

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(logrosRoutes)],
    exports: [RouterModule]
  })

  export class TemasRoutingModule { }
  