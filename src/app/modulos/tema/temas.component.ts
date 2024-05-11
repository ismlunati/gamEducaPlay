import { AsignaturaService } from './../asignatura/asignatura.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuario/auth.service';
import { Tema } from './model/Tema';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html'
})
export class TemasComponent implements OnInit {

  id!: number;
  temas: Tema[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // El signo más convierte el id a número
    });


    this.asignaturaService.getTemasPorAsignatura(this.id).subscribe(temas => {
      this.temas = temas;
      console.log("procedo a imprimir las asignaturas",this.temas);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });


  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }

}
