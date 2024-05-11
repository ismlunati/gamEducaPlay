import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario:Usuario= new Usuario();


  loginForm = new UntypedFormGroup({
      nombreUsuario: new UntypedFormControl(''),
      password: new UntypedFormControl('')
  });



  constructor( private servicio:AuthService, private router:Router) { }

   ngOnInit(): void {

    // if(this.servicio.token){
    //   Swal.fire("Aviso","Ya estas autenticado!","info");
    //   this.router.navigate([''])
    // }

  }

  login():void{

    this.servicio.login(this.loginForm.value).subscribe(
      resp => {
                //console.log("esto responde:",resp.access_token);

                //this.servicio.guardarToken(resp.access_token);

                //this.servicio.guardarUsuario(resp.access_token);
                console.log("user",this.loginForm.controls['nombreUsuario'].value);
                console.log("password",this.loginForm.controls['password'].value);
                Swal.fire('Login',`Hola ${this.loginForm.controls['nombreUsuario'].value}, ha iniciado sesión con exito`,'success');

                this.router.navigate(['']);

              },
      error=>{
              console.log("error:",error);

              Swal.fire('Error Login',`error: ${error.status}`,'error');
      }

    )

   }

}
