import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modulos/usuario/auth.service';

@Component({
  selector: 'app-asignatura-main',
  templateUrl: './asignatura-main.component.html'
})
export class AsignaturaMainComponent implements OnInit {

  @Input() alumno!: boolean;


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  
  esAlumno():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_USER') {

      return true;
    } else {

      return false;
    }
  }

}
