import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AsignaturaService } from '../../asignatura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html'
})
export class InscripcionComponent implements OnInit {

  codigo = new UntypedFormControl('');

  constructor(private http: HttpClient, private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
  }

  acceder(): void {
    const codigoValue = this.codigo.value;

    this.asignaturaService.enviarCodigo(codigoValue)
    .subscribe(response => {
      if(response){
        Swal.fire('Inscripcion',`Se ha realizado la solicitud de inscripción con exito`,'success');
        console.log("Con exito");
      
      }else{
        Swal.fire('Inscripcion',`No se ha encontrado curso con ese código`,'info');
        console.log("No encontrada");

      }
      // maneja la respuesta de la API
      console.log(response);

    }, error => {
      // maneja el error
      console.error(error);
      console.log("Fracaso");
    });
}

}
