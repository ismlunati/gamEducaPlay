import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignatura-navigate',
  templateUrl: './asignatura-navigate.component.html'
})
export class AsignaturaNavigateComponent implements OnInit {


  id!: number;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // El signo más convierte el id a número
    });
  }

}
