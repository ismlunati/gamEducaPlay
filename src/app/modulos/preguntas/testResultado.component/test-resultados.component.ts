import { ActivatedRoute } from '@angular/router';
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-resultados',
  templateUrl: './test-resultados.component.html'
})
export class TestResultadosComponent implements OnInit {

  idAsignatura!:number;
  idTest!:number;


  resultados: any;  // Declaras la propiedad 'resultados' aquí

  constructor(private testService: TestService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.idAsignatura = +this.route.snapshot?.paramMap.get('idAsignatura')!;

    this.idTest= +this.route.snapshot?.paramMap.get('idTest')!;
  

    console.log("asignatura y test", this.idAsignatura, this.idTest)
    this.testService.getTestResultados(this.idAsignatura, this.idTest).subscribe(
      data => {
        this.resultados = data;
        console.log("resultados", data) // 'resultados' es una variable de la clase donde almacenas el objeto PreguntaElegibleDTO
      },
      error => {
        console.error('Ha ocurrido un error al obtener los resultados: ', error);
      }
    );
  }
  

}
