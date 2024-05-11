import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from './estadisticas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./styles.css'],
  animations: [
    trigger('slideFromLeft', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition('void => *', [animate('1s ease-out')])
    ]),
    trigger('slideFromRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition('void => *', [animate('1s ease-out')])
    ])
  ]
  
})
export class EstadisticasComponent implements OnInit {


  id!:number;


  grupoBotones: string = '';


  constructor(private estadisticaService: EstadisticasService, private route: ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {

    this.id= +this.route.snapshot.parent?.paramMap.get('id')!;
  }



  navegar(listado: string) {
    console.log(listado);
    this.router.navigate(['/asignaturas', this.id, 'estadisticas' , listado]);
  }


  mostrarBotones(grupo: string) {
    this.grupoBotones = grupo;
  }


}
