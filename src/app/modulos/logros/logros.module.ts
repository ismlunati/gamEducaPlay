import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoLogrosComponent } from './listado-logros/listado-logros.component';
import { AnadirLogrosComponent } from './anadir-logros/anadir-logros.component';
import { RouterModule } from '@angular/router';
import { LogrosComponent } from './logros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { logrosRoutes } from './logros-routing.module';



@NgModule({
  declarations: [
    ListadoLogrosComponent,
    AnadirLogrosComponent,
    LogrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(logrosRoutes)
  ],
  exports:[
    ListadoLogrosComponent,
    AnadirLogrosComponent,
    LogrosComponent
  ]
})
export class LogrosModule { }
