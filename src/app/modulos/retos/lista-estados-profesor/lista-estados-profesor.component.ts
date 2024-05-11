import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/modulos/asignatura/asignatura.service';
import { AlumnoRetoDTO } from 'src/app/modulos/retos/model/AlumnoRetoDTO';
import { EstadoReto } from 'src/app/modulos/retos/model/EstadoReto';
import { Reto } from 'src/app/modulos/retos/model/Reto';
import { AuthService } from 'src/app/modulos/usuario/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estados-profesor',
  templateUrl: './lista-estados-profesor.component.html'
})
export class ListaEstadosProfesorComponent implements OnInit {


  @Input() retosAsignados?: AlumnoRetoDTO[];

  @Input() estadoSeleccionado?: EstadoReto;


  @Output() recargarRetos = new EventEmitter<String>();

  public tablaData: any[] = [];





  id!: number;
  retos: Reto[] = [];
  retosUsuario: Reto[] = [];

  retosFiltrados: Reto[] = [];

  listas: string[] = ['Lista retos', 'Retos inscritos'];  // Opciones para el select
  listaSeleccionada: string = 'Lista retos';

  public estados = Object.keys(EstadoReto);


  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))

    this.id = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.actualizarListaRetosFiltrado();


    console.log("Retos asignador", this.retosAsignados)
    console.log("Retos tabla", this.tablaData)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("EntrangChanges")
    console.log("Retos cambio estado", this.retosAsignados);
    // Verifica si retosUsuarioFiltrado ha cambiado
    if (changes.retosAsignados) {
      console.log("EntrangChangesy actua")
      this.actualizarListaRetosFiltrado();
      console.log("tablaPush", this.tablaData );
    }
  }



  actualizarListaRetosFiltrado() {
    this.tablaData = [];

    this.retosAsignados!.forEach((alumnoReto) => {
      const alumno = alumnoReto.alumno;
      alumnoReto.retoConEstado.forEach((retoConEstado) => {
        const reto = retoConEstado.reto;
        const estado = retoConEstado.estado;
        const idAlumnoReto = retoConEstado.idAlumnoReto;
        this.tablaData.push({
          alumno: alumno,// Suponiendo que el alumno tiene un campo nombre
          idAlumnoReto: idAlumnoReto,
          ...reto, // Suponiendo que reto es un objeto con varios campos
          estado // Suponiendo que quieres mostrar el estado también
        });
      });
    });
  }


  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id, 'retos', id, 'editar']);
  }


  cambiarDecision(idAlumnoReto: number): void {
    this.asignaturaService.cambiarDecisionReto( this.id, idAlumnoReto).subscribe(
      res => {
        Swal.fire('Cambio de Decision', `Se ha realizado lel cambio de decision del reto ${idAlumnoReto} con exito`, 'success');

        console.log('Decision del reto cambiada exitosamente');
     

        this.recargarRetos.emit();
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Cambio de Decision', `Se ha realizado lel cambio de decision del reto ${idAlumnoReto} con exito`, 'error');

        console.error('Error borrando la asignatura', err);
      }
      
      );
  }

  aceptarReto(idAlumnoReto: number): void {
    this.asignaturaService.aceptarReto(this.id, idAlumnoReto).subscribe(
      res => {
        Swal.fire('Reto aceptado', `Se ha aceptado el reto ${idAlumnoReto} con exito`, 'success');
        console.log('reto aceptado');
        //this.retos = this.retos.filter(reto => reto.id !== idReto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Reto aceptado', `Error aceptando el reto ${idAlumnoReto}`, 'error');

        console.error('Error aceptando reto', err);
      }
    );
  }

  rechazarReto(idAlumnoReto: number): void {
    this.asignaturaService.rechazarReto(this.id, idAlumnoReto).subscribe(
      res => {
        Swal.fire('Reto rechazado', `Se ha rechazado el reto ${idAlumnoReto} con exito`, 'success');

        console.log('reto rechazado');
        //this.retos = this.retos.filter(reto => reto.id !== idReto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Reto rechazado', `Error rechazando el reto ${idAlumnoReto}`, 'error');

        console.error('Error rechazando reto', err);
      }
    );
  }



  esProfesor(): boolean {

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre == 'ROLE_ADMIN') {
      return true;
    } else {

      return false;
    }
  }

}
