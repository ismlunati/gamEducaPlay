import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefactosComponent } from './modulos/artefactos/artefactos.component';
import { AsignaturaAnadirComponent } from './modulos/asignatura/asignatura-anadir/asignatura-anadir.component';
import { AsignaturaMainComponent } from './modulos/asignatura/asignatura-main/asignatura-main.component';
import { InscripcionComponent } from './modulos/asignatura/asignatura-main/inscripcion/inscripcion.component';
import { AsignaturaNavigateComponent } from './modulos/asignatura/asignatura-navigate/asignatura-navigate.component';
import { AsignaturaComponent } from './modulos/asignatura/asignatura.component';
import { SolicitudesPendientesComponent } from './modulos/asignatura/solicitudes-pendientes/solicitudes-pendientes.component';
import { LogrosComponent } from './modulos/logros/logros.component';
import { TestResultadosComponent } from './modulos/preguntas/testResultado.component/test-resultados.component';
import { RetosComponent } from './modulos/retos/retos.component';
import { TemasComponent } from './modulos/tema/temas.component';
import { LoginComponent } from './modulos/usuario/login/login.component';
import { RegisterComponent } from './modulos/usuario/register/register.component';
import { FooterComponent } from './modulos/web-main/footer/footer.component';
import { EstadisticasComponent } from './modulos/estadisticas/estadisticas.component';


const routes: Routes = [

  {
    path: '',
    component: FooterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'asignaturas',
    component: AsignaturaComponent,
    children: [
      {
        path: ':id/listaSolicitudesPendientes',
        component: SolicitudesPendientesComponent
      },
      {
        path: '',
        component: AsignaturaMainComponent
      },
      {
        path: 'añadir',
        component: AsignaturaAnadirComponent
      },
      {
        path: ':id/editar',
        component: AsignaturaAnadirComponent
      },
      {
        path: ':id',
        component: AsignaturaNavigateComponent
      },
      {
        path: ':id/temas',
        
        loadChildren: () => import('./modulos/tema/tema.module').then(m => m.TemaModule)
      },
      {
        path: ':id/retos',
        loadChildren: () => import('./modulos/retos/reto.module').then(m => m.RetoModule)

      },
      {
        path: ':id/artefactos',
        loadChildren: () => import('./modulos/artefactos/artefactos.module').then(m => m.ArtefactosModule)

      },
      {
        path: ':id/logros',
        loadChildren: () => import('./modulos/logros/logros.module').then(m => m.LogrosModule)

      },
      {
        path: ':id/test',
        loadChildren: () => import('./modulos/preguntas/test.module').then(m => m.TestModule)

      },
      {
        path: ':id/estadisticas',
        loadChildren: () => import('./modulos/estadisticas/estadisticas.module').then(m => m.EstadisticasModule)
      },


    ]
  },


  {
    path: 'inscripcion',
    component: InscripcionComponent
  },

  {
    path: 'test-resultados/:idAsignatura/:idTest',
    component: TestResultadosComponent
  }, // Añadir esta línea para la ruta de Test


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
