import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modulos/usuario/auth.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html'
})
export class AsignaturaComponent implements OnInit {

  //private usuario!:Usuario;
  //public esProfesor!:boolean
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
    //this.usuario= this.usuarioService.usuario;
    //console.log("Printeo usuario");
    
    //this.esProfesor= this.usuario.roles[0].rolNombre== 'ROLE_ADMIN'
    //console.log(this.esProfesor);
  }



  esAlumno():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_USER') {

      return true;
    } else {

      return false;
    }
  }
  
}
