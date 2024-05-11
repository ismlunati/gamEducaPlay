import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotivoReportePregunta } from '../model/MotivoReportePregunta';
import { EstadoReportePregunta } from '../model/EstadoReportePregunta';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ReportePregunta } from '../model/ReportePregunta';
import { TestService } from '../test.service';

@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html'
})
export class CrearReporteComponent implements OnInit {

  idAsignatura!:number;
  idTest!:number;
  idPregunta!:number;

  reporteForm: UntypedFormGroup;
  motivoOptions = Object.keys(MotivoReportePregunta);
  estadoOptions = Object.keys(EstadoReportePregunta);

  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, private testService:TestService) { 

    this.reporteForm = this.fb.group({
      texto: [''],
      motivo: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {

    this.idAsignatura = +this.route.parent?.snapshot.paramMap.get('id')!;
    this.idTest = +this.route.snapshot.paramMap.get('idTest')!;
    this.idPregunta = +this.route.snapshot.paramMap.get('idPregunta')!;

    console.log("id this.idAsignatura", this.idAsignatura);
    console.log("id this.idTest", this.idTest);
    console.log("id this.idPregunta",this.idPregunta);

  }


  onSubmit(): void {
    const formValues = this.reporteForm.value;

    // crea un objeto ReportePregunta
    const reportePregunta: ReportePregunta = {
      id: 0,
      texto: formValues.texto,
      motivo: formValues.motivo,
      estado: formValues.estado,
      pregunta: null,
      alumno: null
    };
    
    console.log("reportarPregunta", reportePregunta);
        // Ahora llama a tu servicio con este objeto
        this.testService.crearReportarPregunta(reportePregunta, this.idAsignatura, this.idTest, this.idPregunta)
        .subscribe(
          response =>  {
            // Maneja la respuesta exitosa aquí.
            // 'response' es el valor que la API retorna.
            console.log('Respuesta exitosa:', response);
            alert('Reporte enviado exitosamente!');
          },
          error => {
            // Maneja el error aquí.
            // 'error' es el error que la API retorna.
            console.error('Ocurrió un error:', error);
            alert('Ocurrió un error al enviar el reporte.');
          }
        );
  }


  getMotivoValue(key: string): string {
    return MotivoReportePregunta[key as keyof typeof MotivoReportePregunta];
  }

  getEstadoValue(key: string): string {
    return EstadoReportePregunta[key as keyof typeof EstadoReportePregunta];
  }

}
