import { TestService } from '../test.service';
import { Pregunta } from '../model/Pregunta';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AsignaturaService } from 'src/app/modulos/asignatura/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { Tema } from '../../tema/model/Tema';



@Component({
  selector: 'app-test',
  templateUrl: 'createTest.component.html'
})
export class CreateTestComponent implements OnInit {


  testForm!: UntypedFormGroup;
  elegiblePreguntas: any[] = [];
  selectedPreguntas: Pregunta[] = [];
  numeroPreguntas!: number;

  temas!: Tema[];
  idAsignatura!: number;

  // Objeto para mantener el estado de cada checkbox
  checkboxStatus: { [id: string]: boolean } = {};


  private destroy$: Subject<void> = new Subject<void>();



  constructor(private fb: UntypedFormBuilder, private testService: TestService, private asignaturaService: AsignaturaService
    , private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    console.log("Test.Component: ngOnInit");

    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;



    this.testForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      numeroPreguntas: ['', Validators.required],
      listaTemas: this.fb.array([]),
      visible: [false],
      preguntasElegibles: [false],
      fechaInicio: [''],
      fechaFin: ['']
    });


    this.asignaturaService.getTemasPorAsignatura(this.idAsignatura).subscribe(temas => {
      this.temas = temas;
      console.log("TemaS", temas);


      // Inicializar listaTemas como FormArray
      this.testForm.setControl('listaTemas', new UntypedFormArray(
        this.temas.map(() => new UntypedFormControl(false))  // Inicializar cada checkbox como no marcado
      ));

    });



    this.testForm.get('numeroPreguntas')?.valueChanges.subscribe(value => {
      this.numeroPreguntas = value;
      this.resetSelectedPreguntas();
      console.log("Cambia valor numero preguntas");
    });

    this.testForm.get('listaTemas')?.valueChanges.subscribe(() => {
      this.resetSelectedPreguntas(); // resetea las preguntas seleccionadas
    });
  }


  get listaTemas(): UntypedFormArray {
    return this.testForm.get('listaTemas') as UntypedFormArray;
  }

  toFormControl(control: AbstractControl): UntypedFormControl {
    return control as UntypedFormControl;
  }


  getSelectedTemasIds(): string {
    const selectedTemasIds: number[] = []; // Declarando explícitamente el tipo de variable
    this.testForm.get('listaTemas')?.value.forEach((selected: boolean, index: number) => {
      if (selected) {
        selectedTemasIds.push(this.temas[index].id);
      }
    });
    return selectedTemasIds.join(',');
  }


  // Método para resetear las preguntas seleccionadas y elegibles

  resetSelectedPreguntas(): void {
    console.log("paso por aqui")
    this.selectedPreguntas = [];
    this.elegiblePreguntas = [];

    this.testForm.patchValue({ preguntasElegibles: false });
    // Restablecer el estado de cada checkbox a false

    console.log("seteo a false", this.testForm.value['preguntasElegibles']);


    console.log("valor formulario", this.testForm.value)
  }

  // En tu método onSubmit
  onSubmit(event: Event): void {
    console.log("Test.Component: onSubmit");

    event.preventDefault();
    if (this.testForm.valid) {
      this.testForm.patchValue({ listaTemas: this.getSelectedTemasIds() });
      const selectedPreguntaIds = this.selectedPreguntas.map(pregunta => pregunta.id).join(',');
      this.testService.createTest(this.testForm.value, selectedPreguntaIds).subscribe(
        response => {
          console.log('Test creado exitosamente', response);
          // Puedes añadir más lógica aquí, como redirigir a otra página o mostrar un mensaje de éxito
        },
        error => {
          console.error('Hubo un error al crear el test', error);
          // Puedes manejar los errores aquí, como mostrar un mensaje de error al usuario
        }
      );
    }
  }



  onCheckboxChange() {
    console.log("Test.Component: onCheckboxChange");
    console.log("getSelectedTemasIds()", this.getSelectedTemasIds())
    if (this.testForm.get('preguntasElegibles')?.value) {
      const listaTemas = this.testForm.get('listaTemas')?.value;

      this.testService.getElegiblePreguntas(this.getSelectedTemasIds()).subscribe(
        (preguntasElegibles: any) => {
          // Llena la variable con las preguntas elegibles
          this.elegiblePreguntas = preguntasElegibles;
        },
        (error) => {
          // Maneja el error
          console.error('Error al obtener preguntas elegibles:', error);
        }
      );
    } else {
      // Limpia la lista si el checkbox se desmarca
      this.elegiblePreguntas = [];
    }
  }

  toggleSelection(pregunta: Pregunta) {
    console.log("Test.Component: toggleSelection");
    const index = this.selectedPreguntas.indexOf(pregunta);

    // Si la pregunta no está en el array y no hemos alcanzado el límite
    if (index === -1 && this.selectedPreguntas.length < this.numeroPreguntas) {
      this.selectedPreguntas.push(pregunta);
    }
    // Si la pregunta ya está en el array, la retiramos
    else if (index !== -1) {
      this.selectedPreguntas.splice(index, 1);
    }
  }


  shouldDisableCheckbox(pregunta: Pregunta) {
    console.log("Test.Component: shouldDisableCheckbox");

    if (this.selectedPreguntas.length >= this.numeroPreguntas) {
      return !this.selectedPreguntas.includes(pregunta);
    }
    return false;
  }

  isPreguntaSelected(pregunta: Pregunta): boolean {
    console.log("Test.Component: isPreguntaSelected");

    return this.selectedPreguntas.includes(pregunta);
  }


  fetchElegiblePreguntas() {
    console.log("Test.Component: fetchElegiblePreguntas");

    if (this.testForm?.get('preguntasElegibles')?.value) {
      const listaTemasValue = this.testForm.get('listaTemas')?.value;
      this.testService.getElegiblePreguntas(listaTemasValue).subscribe(data => {
        this.elegiblePreguntas = data;
      });
    } else {
      this.elegiblePreguntas = [];
    }
  }
}

