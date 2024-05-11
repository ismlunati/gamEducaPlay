import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtefactosComponent } from './artefactos.component';
import { ListadoArtefactosComponent } from './listado-artefactos/listado-artefactos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnadirArtefactosComponent } from './anadir-artefactos/anadir-artefactos.component';
import { ListadoArtefactosAlumnosComponent } from './listado-artefactos-alumnos/listado-artefactos-alumnos.component';
import { artefactoRoutes } from './artefactos-routing.module';



@NgModule({
  declarations: [
  ArtefactosComponent,
  ListadoArtefactosComponent,
  AnadirArtefactosComponent,
  ListadoArtefactosAlumnosComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(artefactoRoutes)
  ], 
  exports:[
    ArtefactosComponent,
    ListadoArtefactosComponent,
    ArtefactosComponent


  ]
})
export class ArtefactosModule { }
