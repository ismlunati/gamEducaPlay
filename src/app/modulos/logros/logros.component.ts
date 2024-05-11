import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../asignatura/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { Logro } from './model/Logro';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html'
})
export class LogrosComponent implements OnInit {

  id!: number;
  logros: Logro[] = [];

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {



  }

}
