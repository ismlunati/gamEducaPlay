import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../estadisticas.service';
import { ActivatedRoute } from '@angular/router';
import { EstadisticasReportesAlumnosDTO } from '../model/EstadisticasReportesAlumnosDTO';

@Component({
  selector: 'app-preguntas-reportadas',
  templateUrl: './preguntas-reportadas.component.html',
  styleUrls: ['../styles.css']


})
export class PreguntasReportadasComponent implements OnInit {

  reportesAlumnos!: EstadisticasReportesAlumnosDTO[];

  idAsignatura!: number;
  constructor(private estadisticaService: EstadisticasService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.idAsignatura = +this.route.snapshot.parent?.paramMap.get('id')!;

    this.estadisticaService.getEstadisticasReportesAlumnos(this.idAsignatura, "preguntasReportadas").subscribe(reportes => {
      this.reportesAlumnos = reportes;

    })

  }

}