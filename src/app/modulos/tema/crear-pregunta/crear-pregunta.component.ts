import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormArray, UntypedFormGroup, UntypedFormControl, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/modulos/preguntas/model/Pregunta';
import { TestService } from 'src/app/modulos/preguntas/test.service';

@Component({
  selector: 'app/modulos/-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['../tema.component.css']

})
export class CrearPreguntaComponent implements OnInit {
  preguntaForm!
    : UntypedFormGroup;
  idAsignatura!: number;
  idTema!: number;

  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, private testService: TestService) { }

  ngOnInit(): void {
    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;
    this.idTema = +this.route.snapshot.paramMap.get('id')!;

    this.preguntaForm = this.fb.group({

      enunciado: ['', Validators.required],
      numRespuestas: [1, Validators.required],
      respuestas: this.fb.array([]),
      respuestaCorrecta: ['', Validators.required],
    });
  }

  get respuestas() {
    // Retorna el FormArray
    return (this.preguntaForm.get('respuestas') as UntypedFormArray);
  }

  crearRespuestas() {
    const numRespuestas = this.preguntaForm.get('numRespuestas')?.value;
    this.respuestas.clear(); // Llamada correcta a clear
    for (let i = 0; i < numRespuestas - 1; i++) {
      this.respuestas.push(this.fb.control('', Validators.required)); // Llamada correcta a push
    }
  }


  toFormControl(control: AbstractControl): UntypedFormControl {
    return control as UntypedFormControl;
  }


  onSubmit() {


    if (this.preguntaForm.valid) {
      this.testService.crearPregunta(this.idAsignatura, this.idTema, this.preguntaForm.value).subscribe({
        next:(respuesta) => 
          console.log('Pregunta creado exitosamente', respuesta)
          // Puedes añadir más lógica aquí, como redirigir a otra página o mostrar un mensaje de éxito
        ,
        error:(e)=> 
          console.error('Hubo un error al crear la Pregunta', e)
          // Puedes manejar los errores aquí, como mostrar un mensaje de error al usuario
        
    });


      console.log(this.preguntaForm.value)
      console.log(this.preguntaForm.value.respuestas.join(','));
    }
  }


  getValidacionEnunciado():string{
    let resultado:string="";

    if(this.preguntaForm.get('enunciado')?.errors?.required){
      resultado="Debe introducir un enunciado de la pregunta";     
    }
    return resultado;
  }
  getValidacionRespuestaCorrecta():string{
    let resultado:string="";
    
    if(this.preguntaForm.get('respuestaCorrecta')?.errors?.required){
      resultado="Debe introducir una respuesta correcta de la pregunta";
    }
    return resultado;
  }


  getValidacionRespuesta(index: number): string {
    const respuestaControl = this.respuestas.at(index);

    if (respuestaControl.errors) {
      if (respuestaControl.errors.required) {
        return 'La respuesta es obligatoria.';
      }
      // Aquí puedes agregar más validaciones según necesites
    }

    return ''; // Devuelve un string vacío si no hay errores
  }

}
