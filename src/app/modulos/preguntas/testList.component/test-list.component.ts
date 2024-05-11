import { TestService } from './../test.service';
import { Pregunta } from '../model/Pregunta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../usuario/auth.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html'
})
export class TestListComponent implements OnInit {

  tests: any[] = [];
  pregunta!: Pregunta;

  idAsignatura!:number;

  constructor(private testService: TestService, private router: Router, private route: ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {

    this.idAsignatura= +this.route.snapshot.parent?.paramMap.get('id')!;

    console.log("Test-List.Component: ngOnInit");
    this.testService.getTests( this.idAsignatura).subscribe(data => {
      this.tests = data;
      console.log("Test", this.tests)
    });
  }

  realizarTest(testId: number) {
    console.log("Test-List.Component: realizarTest");
    this.testService.realizarTest(0, this.idAsignatura, testId, true).subscribe(
      response => {
        console.log("Res de realziarTEST")
        this.pregunta = this.testService.preguntaActual;
        if (this.pregunta.id === -1) {
          console.log("FIIIIIIIIIIIIIIIIIIIN");
        } else {
          console.log("Test-List.Component: respuesta -> Ir a test-pregunta");
          this.router.navigate(['/asignaturas', this.idAsignatura,'test','test-pregunta', testId]);   

        }
      },
      error => {
        console.error("Ha ocurrido un error", error);
      }
    );
  }


  esProfesor():boolean{

    if (this.authService.getUserFromLocalStorage()?.roles[0].rolNombre== 'ROLE_ADMIN') {
      
      return true;
    } else {

      return false;
    }
  }
}
