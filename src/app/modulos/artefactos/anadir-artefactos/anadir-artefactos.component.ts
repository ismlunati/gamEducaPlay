import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artefacto } from 'src/app/modulos/artefactos/model/Artefacto';
import { Asignatura } from 'src/app/modulos/asignatura/model/asignatura';
import { AsignaturaService } from 'src/app/modulos/asignatura/asignatura.service';
import { AuthService } from 'src/app/modulos/usuario/auth.service';

@Component({
  selector: 'app-anadir-artefactos',
  templateUrl: './anadir-artefactos.component.html',
  styleUrl:'../artefacto.component.css'
})
export class AnadirArtefactosComponent implements OnInit {

  artefactoForm!: UntypedFormGroup;

  idAsignatura:number | null = null;

  idArtefacto:number | null = null;

  
  artefacto!: Artefacto;
  asignatura!: Asignatura;


  constructor(private fb: UntypedFormBuilder,private asignaturaService: AsignaturaService,
     private route: ActivatedRoute, private authService:AuthService, private router: Router) {

    // this.artefactoForm = this.fb.group({
    //   nombre: [''], // valor inicial vacío
    //   descripcion: [''], // valor inicial vacío
    //   coste: [0], // valor inicial 0
    //   repetible: [false], // valor inicial false
    //   temporal: [false], // valor inicial false
    //   fechaInicio:  [{value: '', disabled: true}], // valor inicial vacío
    //   fechaFin:  [{value: '', disabled: true}], // valor inicial vacío
    // });
  }


  ngOnInit(): void {
    //this.route.snapshot.parent?.paramMap.get('id')
    

    this.artefactoForm = this.fb.group({
      nombre: new UntypedFormControl('', Validators.required),
      descripcion: new UntypedFormControl('', Validators.required),
      costePuntos: new UntypedFormControl('', Validators.required),
      repetible: new UntypedFormControl(false),
      temporal: new UntypedFormControl(false),
      fechaInicio: new UntypedFormControl({ value: '', disabled: true }),
      fechaFin: new UntypedFormControl({ value: '', disabled: true })
    });



      this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

      this.idArtefacto= +this.route.snapshot?.paramMap.get('id')!;
      console.log("Este es el id", this.idAsignatura);

      console.log("Este es el id del artefacto", this.idArtefacto);
      
      if (this.idArtefacto!==0) {
        // Aquí va la lógica si existe id
        console.log(`El id es ${this.idAsignatura}`);
        


        this.asignaturaService.getArtefactoPorId(this.idAsignatura,this.idArtefacto).subscribe(artefacto => {
          this.artefacto = artefacto;
  
          console.log("Procedo a imprimir los alumnos");
          console.log("Procedo a imprimir idAsignatura");
          console.log("el arteacto es ", artefacto);
          console.log( new Date(this.artefacto.fechaInicio).toISOString().slice(0,10));

          this.artefactoForm.patchValue({
            nombre: this.artefacto.nombre,
            descripcion: this.artefacto.descripcion,
            costePuntos: this.artefacto.costePuntos,
            repetible: this.artefacto.repetible, // valor inicial false
            temporal: this.artefacto.temporal, // valor inicial false
            fechaInicio: this.artefacto.fechaInicio ? new Date(this.artefacto.fechaInicio).toISOString().slice(0,10) : '',
            fechaFin: this.artefacto.fechaFin ? new Date(this.artefacto.fechaInicio).toISOString().slice(0,10) : ''
                    });
        });


        
      } else {
        // Aquí va la lógica si no existe id
        console.log('Es operacion /save');
      }



      this.artefactoForm.get('temporal')?.valueChanges.subscribe(temporal => {
        if (temporal==="true") {
          this.artefactoForm.get('fechaInicio')?.enable();
          this.artefactoForm.get('fechaFin')?.enable();
        } else {
          this.artefactoForm.get('fechaInicio')?.disable();
          this.artefactoForm.get('fechaFin')?.disable();
          //puede que haya que poner a vacio en campo fecha cuando se setee disable
        }
      });



  }




  metodoActualizarCrear():void{
    if(this.idArtefacto!==0){
      console.log("actualizar")
      this.actualizarArtefacto();

    }else {

      this.crearArtefacto()
      console.log("crearAsignatura")
    }
    this.router.navigate(['/asignaturas',this.idAsignatura,'artefactos','listado']);
  }


  crearArtefacto(): void {
    this.asignaturaService.crearArtefacto(this.artefactoForm.value,this.idAsignatura!)
      .subscribe((artefacto: Artefacto) => {
        console.log('Artefacto creada', artefacto);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }


  actualizarArtefacto(): void {
console.log("actualizando");
    Object.assign(this.artefacto, this.artefactoForm.value);

    console.log(this.artefacto);

    this.asignaturaService.actualizarArtefacto(this.artefacto, this.idAsignatura!)
      .subscribe((artefactoActualizado: Artefacto) => {
        console.log('Artefacto actualizado', artefactoActualizado);
        // Aquí podrías redirigir al usuario, actualizar la lista de asignaturas, etc.
      });
  }

  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {

      return true;
    } else {

      return false;
    }
  }



  getValidacionNombre():string{
    let resultado:string="";

    if(this.artefactoForm.get('nombre')?.errors?.required){
      resultado="Debe introducir un nombre del artefacto";     
    }
    return resultado;
  }
  getValidacionDescripcion():string{
    let resultado:string="";
    
    if(this.artefactoForm.get('descripcion')?.errors?.required){
      resultado="Debe introducir una descripcion del artefacto";
    }
    return resultado;
  }

  getValidacionCoste():string{
    let resultado:string="";
    
    if(this.artefactoForm.get('costePuntos')?.errors?.required){
      resultado="Debe introducir una coste del artefacto";
    }
    return resultado;
  }

}
