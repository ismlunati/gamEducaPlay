import { RouterModule, Routes } from "@angular/router";
import { TestViewComponent } from "./test-view.component";
import { TestListComponent } from "./testList.component/test-list.component";
import { CreateTestComponent } from "./testCreate.component/createTest.component";
import { AnadirLogrosComponent } from "../logros/anadir-logros/anadir-logros.component";
import { TestPreguntaComponent } from "./testPregunta.component/test-pregunta.component";
import { CrearReporteComponent } from "./crear-reporte/crear-reporte.component";
import { ReportePreguntasComponent } from "./reporte-preguntas/reporte-preguntas.component";
import { NgModule } from "@angular/core";


export const preguntasRoutes: Routes = [
    {
        path: '',
        component: TestViewComponent,
        children: [
            { path: 'listado',                                  component: TestListComponent },
            { path: 'añadir',                                   component: CreateTestComponent },
            { path: ':id/editar',                               component: AnadirLogrosComponent },
            { path: 'test-pregunta/:idTest',                    component: TestPreguntaComponent },
            { path: ':idTest/reportarPregunta/:idPregunta',     component: CrearReporteComponent },
            { path: 'reportePregunta',                          component: ReportePreguntasComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(preguntasRoutes)],
    exports: [RouterModule]
  })
  export class PreguntasRoutingModule { }
  