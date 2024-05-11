import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/modulos/asignatura/model/asignatura';
import { AsignaturaService } from 'src/app/modulos//asignatura/asignatura.service';
import { Tema } from 'src/app/modulos/tema/model/Tema';
import { AuthService } from 'src/app/modulos//usuario/auth.service';

@Component({
  selector: 'app-anadir-tema',
  templateUrl: './anadir-tema.component.html',
  styleUrls: ['../tema.component.css']
})
export class AnadirTemaComponent implements OnInit {

  temaForm: UntypedFormGroup;

  idAsignatura: number | null = null;

  idTema: number | null = null;

  tema!: Tema;
  asignatura!: Asignatura;

  constructor(private fb: UntypedFormBuilder, private asignaturaService: AsignaturaService,
    private route: ActivatedRoute, private authService: AuthService, private router: Router) {

    this.temaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion:['', Validators.required]
      // puedes agregar más controles de formularios aquí
    });
  }

  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')

    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.idTema = +this.route.snapshot?.paramMap.get('id')!;
    console.log("Este es el id", this.idAsignatura);

    console.log("Este es el id del tema", this.idTema);

    if (this.idAsignatura) {
      // Aquí va la lógica si existe id
      console.log(`El id es ${this.idAsignatura}`);

      this.asignaturaService.getTemaPorId(this.idAsignatura, this.idTema).subscribe(tema => {
        this.tema = tema;

        console.log("Procedo a imprimir los alumnos");
        console.log("Procedo a imprimir idAsignatura");
        console.log(tema);
        console.log(this.idAsignatura);

        this.temaForm.patchValue({
          nombre: this.tema.nombre,
          descripcion: this.tema.descripcion
        });
      });


    } else {
      // Aquí va la lógica si no existe id
      console.log('Es operacion /save');
    }


  }

  metodoActualizarCrear(): void {

    if (this.temaForm.valid) {


      if (this.idTema !== 0) {
        console.log("actualizar")
        this.actualizarTema();

      } else {

        this.crearTema()
        console.log("crearAsignatura")
      }

      this.router.navigate(['/asignaturas', this.idAsignatura, 'temas', 'listado']);

    }else {
      console.log("ERror");
    }

  }
  crearTema(): void {


    this.asignaturaService.crearTema(this.temaForm.value, this.idAsignatura!)
      .subscribe((asignaturaCreada: Tema) => {
        console.log('Asignatura creada', asignaturaCreada);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  actualizarTema(): void {

    Object.assign(this.tema, this.temaForm.value);


    this.asignaturaService.actualizarTema(this.tema, this.idAsignatura!)
      .subscribe((temaCreado: Tema) => {
        console.log('Tema actualizado', temaCreado);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }

  esProfesor(): boolean {

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre == 'ROLE_ADMIN') {
      console.log(this.authService.getUserFromLocalStorage()?.roles[0].rolNombre)
      return true;
    } else {

      return false;
    }
  }


  getValidacionNombre():string{
    let resultado:string="";

    if(this.temaForm.get('nombre')?.errors?.required){
      resultado="Debe introducir un nombre del tema";     
    }
    return resultado;
  }
  getValidacionDescripcion():string{
    let resultado:string="";
    
    if(this.temaForm.get('descripcion')?.errors?.required){
      resultado="Debe introducir una descripcion del tema";
    }
    return resultado;
  }
}
