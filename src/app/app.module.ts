import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtefactosModule } from './modulos/artefactos/artefactos.module';
import { AsignaturaModule } from './modulos/asignatura/asignatura.module';
import { EstadisticasModule } from './modulos/estadisticas/estadisticas.module';
import { LogrosModule } from './modulos/logros/logros.module';
import { TestModule } from './modulos/preguntas/test.module';
import { RetoModule } from './modulos/retos/reto.module';
import { TemaModule } from './modulos/tema/tema.module';
import { JwtInterceptor } from './modulos/usuario/JwtInterceptor';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { WebMainModule } from './modulos/web-main/web-main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    HttpClientModule,
    WebMainModule,
    AsignaturaModule,
    TemaModule,
    RetoModule,
    ArtefactosModule,
    LogrosModule,
    TestModule,
    EstadisticasModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
