import { ReportePregunta } from '../model/ReportePregunta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-reporte-preguntas',
  templateUrl: './reporte-preguntas.component.html'

})
export class ReportePreguntasComponent implements OnInit {

  reportePreguntas:ReportePregunta[]=[];
  idAsignatura!:number;

  

  constructor(private route: ActivatedRoute, private testService:TestService, private router: Router) {
    
   }

  ngOnInit(): void {

    this.idAsignatura = +this.route.parent?.snapshot.paramMap.get('id')!;


    this.testService.getReportesPorAsignatura(this.idAsignatura).subscribe(reportePreguntas => {
      this.reportePreguntas = reportePreguntas;

      console.log("procedo a imprimir las reportes pregunta", reportePreguntas);
      //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    });

  }


  

}
