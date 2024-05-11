import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/modulos//asignatura/asignatura.service';
import { AlumnoRetoDTO } from 'src/app/modulos/retos/model/AlumnoRetoDTO';
import { EstadoReto } from 'src/app/modulos/retos/model/EstadoReto';
import { Reto } from 'src/app/modulos/retos/model/Reto';
import { AuthService } from 'src/app/modulos//usuario/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estados',
  templateUrl: './lista-estados.component.html'
})
export class ListaEstadosComponent implements OnInit {


  @Input() retosAsignados?: AlumnoRetoDTO[];

  @Input() estadoSeleccionado?: EstadoReto;

  retosResultado!: Reto[];

  id!: number;


  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))

    this.id = +this.route.snapshot.parent?.paramMap.get('id')!;

    console.log("Retos asignador", this.retosAsignados);

    if (this.retosAsignados && this.retosAsignados[0] && this.retosAsignados[0].retoConEstado) {
      this.retosResultado = this.retosAsignados[0].retoConEstado.filter
        (reto => reto.estado === this.estadoSeleccionado).map(reto => reto.reto);
      console.log("retos resultado= ", this.retosResultado)
    }


  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("Estado", this.estadoSeleccionado)
    console.log("RETOS RESULTADO", this.retosAsignados)
    this.retosResultado = this.retosAsignados![0].retoConEstado.filter
      (reto => reto.estado === this.estadoSeleccionado).map(reto => reto.reto);

      console.log("Reto resultado", this.retosResultado)
    console.log(this.estadoSeleccionado?.toString())
    if (this.estadoSeleccionado?.toString() === 'EN CURSO') {
      console.log("SI")
    }
  }




  reabrirReto(idReto: number, nombreReto: String): void {
    this.asignaturaService.unirseReto(this.id, idReto).subscribe(
      res => {
        console.log('Unido a reto exitosamente');
        Swal.fire('Inscripcion', `Se ha realizado la inscripción al reto ${nombreReto} con exito`, 'success');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Inscripcion', `No se ha podido realizar la inscripción al reto "${nombreReto}" con exito`, 'error');
        console.error('Error uniendose a reto', err);
      }
    );
  }


  finalizarReto(reto: Reto): void {
    this.asignaturaService.finalizarReto(this.id, reto.id).subscribe(
      res => {
        console.log('Unido a reto exitosamente');
        Swal.fire('Inscripcion', `Se ha realizado la inscripción al reto ${reto.nombre} con exito`, 'success');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        Swal.fire('Inscripcion', `No se ha podido realizar la inscripción al reto "${reto.nombre}" con exito`, 'error');
        console.error('Error uniendose a reto', err);
      }
    );
  }



}
