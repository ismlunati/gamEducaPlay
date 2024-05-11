import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripcionComponent } from './asignatura-main/inscripcion/inscripcion.component';
import { ListadoComponent } from './asignatura-main/listado/listado.component';
import { SolicitudesPendientesComponent } from './solicitudes-pendientes/solicitudes-pendientes.component';
import { AsignaturaComponent } from './asignatura.component';
import { RouterModule } from '@angular/router';
import { AsignaturaMainComponent } from './asignatura-main/asignatura-main.component';
import { AsignaturaAnadirComponent } from './asignatura-anadir/asignatura-anadir.component';
import { AsignaturaNavigateComponent } from './asignatura-navigate/asignatura-navigate.component';





@NgModule({
  declarations: [
    InscripcionComponent,
    ListadoComponent,
    SolicitudesPendientesComponent,
    AsignaturaComponent,
    AsignaturaMainComponent,
    AsignaturaAnadirComponent,
    AsignaturaNavigateComponent

  ],
  exports:[
    InscripcionComponent,
    ListadoComponent,
    SolicitudesPendientesComponent
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AsignaturaModule { }
