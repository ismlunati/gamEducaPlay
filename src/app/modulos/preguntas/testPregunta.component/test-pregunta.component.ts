import { TestService } from './../test.service';
import { Pregunta } from '../model/Pregunta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-test-pregunta',
  templateUrl: './test-pregunta.component.html'
})
export class TestPreguntaComponent implements OnInit {
  
  pregunta!: Pregunta;
  selectedRespuesta!: number; // Para almacenar la respuesta seleccionada
  idAsignatura!:number;
  idTest!:number;

  constructor(private router: Router, private testService: TestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ahora puedes obtener la pregunta directamente del servicio sin hacer una nueva llamada al backend
    this.pregunta = this.testService.preguntaActual;

    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.idTest = +this.route.snapshot?.paramMap.get('idTest')!;

    console.log("estamos en el componente pregunta de nuevo")

  }
  

  continuar(): void {
    console.log("Test-Pregunta.Component: continuar");

    const inicio = false; // Puedes definirlo como más te convenga

    this.testService.realizarTest(this.selectedRespuesta, this.idAsignatura, this.idTest, inicio).subscribe(
      data => {
        this.pregunta = data;
        console.log("selected respuesta", this.selectedRespuesta)
        if (this.pregunta.id === -1) {
          console.log("selected respuesta", this.selectedRespuesta)
          console.log("FIIIIIIIIIIIIIIIIIIIN");
          this.router.navigate(['/test-resultados', this.idAsignatura, this.idTest]);
        }
      }
    );
  }
}

