import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  
  registerForm = new UntypedFormGroup({
    nombre: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    nombreUsuario: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    rol: new UntypedFormControl('')
  });

  constructor(private authService: AuthService, private router:Router) {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        // Aquí puedes manejar la respuesta si es necesario.
        console.log('Registrado con éxito y token almacenado.');
        Swal.fire('REGISTRO',`Hola ${this.registerForm.controls['nombreUsuario'].value}, se ha registrado con exito`,'success');
        this.router.navigate(['']);
      },
      error: (error) => {
        // Aquí puedes manejar los errores si es necesario.
        console.log('Error en el registro:', error);
      },
    });
  }
}
