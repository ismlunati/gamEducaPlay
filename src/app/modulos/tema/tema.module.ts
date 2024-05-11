import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemasComponent } from './temas.component';
import { ListadoTemasComponent } from './listado-temas/listado-temas.component';
import { AnadirTemaComponent } from './anadir-tema/anadir-tema.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { temasRoutes } from './temas-routing.module';





@NgModule({
  declarations: [
    TemasComponent,
    ListadoTemasComponent,
    AnadirTemaComponent,
    CrearPreguntaComponent


  ],
  exports:[
  ListadoTemasComponent,
  AnadirTemaComponent,
  TemasComponent,
  CrearPreguntaComponent
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(temasRoutes)
  ]
})
export class TemaModule { }
