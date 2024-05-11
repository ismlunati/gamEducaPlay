import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/modulos//asignatura/asignatura.service';
import { Artefacto } from 'src/app/modulos/artefactos/model/Artefacto';
import { Logro } from 'src/app/modulos/logros/model/Logro';
import { AuthService } from 'src/app/modulos//usuario/auth.service';

@Component({
  selector: 'app/modulos/-listado-logros',
  templateUrl: './listado-logros.component.html'
})
export class ListadoLogrosComponent implements OnInit {


  id!: number;
  logros: Logro[] = [];
  artefactos: Artefacto[] = [];


  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("id asignatura", this.route.snapshot.parent?.paramMap.get('id'))
    
    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;

    
 
    // this.asignaturaService.getArtefactosPorAsignatura(this.id).subscribe(artefactos => {
    //   this.artefactos = artefactos;
    //   console.log("procedo a imprimir los artefactos",this.artefactos);
    //   //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    // });

    this.asignaturaService.getLogrosPorAsignatura(this.id).subscribe(logros => {
      this.logros = logros;
      console.log("procedo a imprimir los logros",this.logros);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });
   

  }

  getNombreArtefacto(artefactoId: number): string {
    const artefacto = this.artefactos.find(a => a.id === artefactoId);
    console.log("id del artefacto del logro", artefactoId)
    return artefacto ? artefacto.nombre : 'Artefacto no encontrado';
  }


  navegar(id: number) {
    this.router.navigate(['/asignaturas', this.id,'logros',id,'editar']);
  }


  borrarLogro(idLogro: number): void {
    this.asignaturaService.borrarLogro(idLogro, this.id).subscribe(
      res => {
        console.log('Logro borrada exitosamente');
        this.logros = this.logros.filter(logro => logro.id !== idLogro);
        // Actualiza tu vista o haz algo tras la eliminación de la asignatura
      },
      err => {
        console.error('Error borrando la Logro', err);
      }
    );
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {
      
      return true;
    } else {

      return false;
    }
  }

}
