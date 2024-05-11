import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../estadisticas.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { EstadisticasPreguntasPorTemasDTO } from '../model/EstadisticasPreguntasPorTemasDTO';


@Component({
  selector: 'app-preguntas-por-tema',
  templateUrl: './preguntas-por-tema.component.html',
  styleUrls: ['../styles.css'],
  animations: [
    trigger('fadeInStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PreguntasPorTemaComponent implements OnInit {

  id!:number;

  preguntasTemas!:EstadisticasPreguntasPorTemasDTO[];


  constructor(private estadisticaService: EstadisticasService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;


    this.estadisticaService.getEstadisticasPreguntaPorTemas(this.id).subscribe(estadisticas=> {
      
      console.log(estadisticas); 
       
       this.preguntasTemas= estadisticas;
       
     });
  }

}
