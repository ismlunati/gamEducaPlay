import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../asignatura/asignatura.service';
import { Reto } from './model/Reto';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html'
})
export class RetosComponent implements OnInit {

  id!: number;
  retos: Reto[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.id = +params.get('id')!; // El signo más convierte el id a número
    // });


    // this.asignaturaService.getRetosPorAsignatura(this.id).subscribe(retos => {
    //   this.retos = retos;
    //   console.log("procedo a imprimir las retos 1",this.retos);
    //   //console.log("Estoy imprimiendo el valor de alumno", this.alumno);
    // });

///EN principio este codigo se podría borrar
  }

}
