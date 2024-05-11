import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RetosComponent } from './retos.component';
import { ListadoRetosComponent } from './listado-retos/listado-retos.component';
import { AnadirRetosComponent } from './anadir-retos/anadir-retos.component';
import { ListaEstadosComponent } from './lista-estados-alumnos/lista-estados.component';
import { ListaEstadosProfesorComponent } from './lista-estados-profesor/lista-estados-profesor.component';
import { retosRoutes } from './retos-routing.module';





@NgModule({
  declarations: [
    RetosComponent,
    ListadoRetosComponent,
    AnadirRetosComponent,
    ListaEstadosComponent,
    ListaEstadosProfesorComponent

  ],
  exports:[
    RetosComponent,
    ListadoRetosComponent,
    AnadirRetosComponent
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(retosRoutes)
  ]
})
export class RetoModule { }
