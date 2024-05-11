import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/modulos/asignatura/asignatura.service';
import { Artefacto } from 'src/app/modulos/artefactos/model/Artefacto';
import { EstadoCompra } from 'src/app/modulos/artefactos/model/EstadoCompra';
import { AuthService } from 'src/app/modulos/usuario/auth.service';
import Swal from 'sweetalert2';
import { ArtefactoCompraDTO } from '../model/ArtefactoCompraDTO';

@Component({
  selector: 'app-listado-artefactos-alumnos',
  templateUrl: './listado-artefactos-alumnos.component.html'

})
export class ListadoArtefactosAlumnosComponent implements OnInit {



  @Output() recargarDatosLista: EventEmitter<string> = new EventEmitter<string>();

  @Input() artefactoCompras?: ArtefactoCompraDTO[];

  @Input() estadoSeleccionado!:EstadoCompra;

  id!: number;



  
  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

    

  }






  canjearArtefacto(idArtefacto: number): void {
    this.asignaturaService.canjearArtefacto( this.id,idArtefacto).subscribe(
      res => {
        Swal.fire('Canjeo',`Se ha canjeado el artefacto ${idArtefacto} con exito`,'success');

        console.log('Artefacto canjeado exitosamente');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
        this.recargarDatosLista.emit('Actualizando lista de artefactos');
      },
      err => {
        console.error('Error canjeando el artefacto', err);
      }
    );

  }


  aceptarCanjeo(idCompra: number): void {
    this.asignaturaService.aceptarCanjeo( this.id,idCompra).subscribe(
      res => {
        Swal.fire('Canjeo aceptado',`Se ha aceptado el canjeo ${idCompra} con exito`,'success');

        console.log('Asignatura borrada exitosamente');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
        this.recargarDatosLista.emit('Actualizando lista de artefactos');
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }

  denegarCanjeo(idCompra: number): void {
    this.asignaturaService.denegarCanjeo( this.id,idCompra).subscribe(
      res => {
        Swal.fire('Canjeo rechazado',`Se ha rechazado el canjeo ${idCompra} con exito`,'success');

        console.log('Asignatura borrada exitosamente');
        this.recargarDatosLista.emit('Actualizando lista de artefactos');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }



  
  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'artefactos',id,'editar']);
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}