import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../asignatura.service';
import { Alumno } from 'src/app/modulos/usuario/model/Alumno';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes-pendientes',
  templateUrl: './solicitudes-pendientes.component.html'
})
export class SolicitudesPendientesComponent implements OnInit {

  alumnos: Alumno[] = [];

  idAsignatura: number=0;

  constructor(private asignaturaService: AsignaturaService, 
    private route: ActivatedRoute, private routerModule: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.idAsignatura = Number(params.get('id')!);
      this.asignaturaService.getAsignaturaListaSolicitudes(this.idAsignatura).subscribe(alumnos => {
        this.alumnos = alumnos;

        if(this.alumnos.length==0){
          Swal.fire("Solicitudes Pendientes", "No hay solicitudes pendientes en esta asignatura")
          this.routerModule.navigate(['/asignaturas'])
        }

        console.log("Procedo a imprimir los alumnos");
        console.log("Procedo a imprimir idAsignatura");
        console.log(alumnos);
        console.log(this.idAsignatura);
      });


    });


  }


  aceptarAlumno(alumno:Alumno){

    console.log("id alumno",alumno);
    this.asignaturaService.aceptarAlumno(this.idAsignatura, alumno.id).subscribe(
      res => {
        console.log('Alumno aceptado');
        this.routerModule.navigate(['/asignaturas'])
        // Actualiza tu vista o haz algo tras la aceptación del alumno
      },
      err => {
        console.error('Error aceptando al alumno', err);
      }
    );


  }

  rechazarAlumno(alumno:Alumno){

    this.asignaturaService.rechazarAlumno(this.idAsignatura, alumno.usuario.id).subscribe(
      res => {
        console.log('Alumno rechazado');
        this.routerModule.navigate(['/asignaturas'])
        // Actualiza tu vista o haz algo tras la aceptación del alumno
      },
      err => {
        console.error('Error aceptando al alumno', err);
      }
    );

    
  }


}
