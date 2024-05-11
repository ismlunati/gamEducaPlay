import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestListComponent } from './testList.component/test-list.component';
import { TestPreguntaComponent } from './testPregunta.component/test-pregunta.component';
import { TestResultadosComponent } from './testResultado.component/test-resultados.component';
import { CreateTestComponent } from './testCreate.component/createTest.component';
import { TestViewComponent } from './test-view.component';
import { CrearReporteComponent } from './crear-reporte/crear-reporte.component';
import { ReportePreguntasComponent } from './reporte-preguntas/reporte-preguntas.component';
import { preguntasRoutes } from './preguntas-routing.module';



@NgModule({
  declarations: [
    CreateTestComponent,
    TestPreguntaComponent,
    TestResultadosComponent,
    TestListComponent,
    TestViewComponent,
    CrearReporteComponent,
    ReportePreguntasComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild(preguntasRoutes)
  ],
  exports: [
    CreateTestComponent,
    TestPreguntaComponent,
    TestResultadosComponent,
    TestListComponent,
    TestViewComponent,
    
    // Exporta tu componente de pregunta de test si es necesario
  ]
})
export class TestModule { }
