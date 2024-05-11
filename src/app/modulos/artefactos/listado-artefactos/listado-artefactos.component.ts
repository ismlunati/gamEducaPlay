import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/modulos/asignatura/asignatura.service';
import { Artefacto } from 'src/app/modulos/artefactos/model/Artefacto';
import { EstadoCompra } from 'src/app/modulos/artefactos/model/EstadoCompra';
import { AuthService } from 'src/app/modulos/usuario/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { ArtefactoCompraDTO } from '../model/ArtefactoCompraDTO';

@Component({
  selector: 'app-listado-artefactos',
  templateUrl: './listado-artefactos.component.html',
  providers: [DatePipe]
})
export class ListadoArtefactosComponent implements OnInit {

  id!: number;
  artefactos: Artefacto[] = [];
  artefactosFiltrados: Artefacto[] = [];
  artefactosAlumno: ArtefactoCompraDTO[] = [];
  artefactosAlumnoFiltrado: ArtefactoCompraDTO[] = [];

  estadoSeleccionado: EstadoCompra = EstadoCompra.COMPRADO;


  listas: string[] = ['Tienda', 'Mis artefactos'];  // Opciones para el select
  listaSeleccionada: string = 'Tienda';


  public estados = Object.keys(EstadoCompra);




  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService: AuthService, private router: Router, private datePipe: DatePipe, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("prueba", this.route.snapshot.parent?.paramMap.get('id'))

    this.id = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.getListaArtefactos();
    this.getListaArtefactosAlumnos();


    if (this.esProfesor()) {
      this.listas = ['Tienda', 'Peticiones de uso'];
    }

  }


  recargarListaArtefactosAlumnos(mensaje: string) {
    this.getListaArtefactosAlumnos();

    alert(mensaje);
  }



  getEstadoValor(estadoKey: string): string | null {
    if (estadoKey in EstadoCompra) {
      return EstadoCompra[estadoKey as keyof typeof EstadoCompra];
    }
    return null;
  }



  filtrarPorEstado(): void {

    if (this.listaSeleccionada !== 'Tienda') {

      this.artefactosAlumnoFiltrado = this.artefactosAlumno.filter(artefacto => artefacto.estadoDeLaCompra === this.estadoSeleccionado);
      console.log("estado seleccionado", this.estadoSeleccionado);

      console.log("arteactos sin filtrar", this.artefactosAlumno);
      console.log("arteactos filtrados", this.artefactosAlumnoFiltrado);

    }
  }





  getListaArtefactos(): void {
    this.asignaturaService.getArtefactosPorAsignatura(this.id).subscribe(artefactos => {
      this.artefactos = artefactos;
      this.artefactosFiltrados = artefactos;
      console.log("procedo a imprimir las artefactos ASIGNATURAq", artefactos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });
  }


  getListaArtefactosAlumnos(): void {

    this.asignaturaService.getArtefactosPorAlumno(this.id).subscribe(artefactos => {
      this.artefactosAlumno = artefactos;


      this.filtrarPorEstado();
      console.log("lista filtrada ", this.artefactosAlumnoFiltrado)

      console.log("procedo a imprimir las artefactos ALUMNOS", artefactos);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }





  borrarArtefacto(idArtefacto: number): void {
    this.asignaturaService.borrarArtefacto(this.id, idArtefacto).subscribe(
      res => {
        Swal.fire('Borrado',`Se ha borrado el artefacto ${this.artefactos.filter(x=> x.id=== idArtefacto)[0].nombre} con exito`,'success');

        console.log('Asignatura borrada exitosamente');
        this.artefactos = this.artefactos.filter(tema => tema.id !== idArtefacto);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
        this.getListaArtefactos();
        this.getListaArtefactosAlumnos();
      },
      err => {
        console.error('Error borrando la asignatura', err);
      }
    );
  }


  comprarArtefacto(idArtefacto: number): void {
    this.asignaturaService.comprarArtefacto(this.id, idArtefacto).subscribe(
      res => {
        console.log('Artefacto comprado exitosamente');
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
        Swal.fire('Compra',`Se ha realizado la compra del artefacto ${this.artefactos.filter(x=> x.id=== idArtefacto)[0].nombre} con exito`,'success');
        this.getListaArtefactosAlumnos();
      },
      err => {
        console.error('Error comprando la asignatura', err);
      }
    );
  }


  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id, 'artefactos', id, 'editar']);
  }

  esProfesor(): boolean {

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre == 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}