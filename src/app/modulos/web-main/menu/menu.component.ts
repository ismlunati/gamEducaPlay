import { Usuario } from '../../usuario/model/Usuario.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/modulos/usuario/auth.service';
import { UsuarioService } from 'src/app/modulos/usuario/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../web-main.component.css']
})
export class MenuComponent implements OnInit {

  user_name!:string;

  usuario$: Observable<Usuario | null>= of(null);


  constructor(public service:UsuarioService, private router:Router, private authService: AuthService) { }


  cerrarSesion():void{
    this.user_name = this.service.usuario.nombreUsuario;

    this.authService.logout();
    Swal.fire('Logout',`${this.user_name}, has cerrado sesión con éxito`,'success');

    this.router.navigate(['/login']);

  }

  ngOnInit(): void {

    this.user_name= this.service.usuario?.nombreUsuario;
    this.usuario$ = this.authService.usuario$;
  }

}
