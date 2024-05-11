import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pregunta } from './model/Pregunta';
import { ReportePregunta } from './model/ReportePregunta';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'http://localhost:8081/asignaturas';

  constructor(private http: HttpClient) { }



  getReportesPorAsignatura(idAsignatura: number): Observable<ReportePregunta[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.get<ReportePregunta[]>(`${this.baseUrl}/${idAsignatura}/reportePreguntas`, httpOptions); // Asegúrate de usar tu URL correcta
  }
    
    
    crearReportarPregunta(reportePregunta: ReportePregunta, idAsignatura: number, idTest: number, idPregunta: number): Observable<any> {
      
      const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }),
        //params: new HttpParams().set('selectedPreguntaIds', selectedPreguntaIds)
      };

      console.log("reportarPregunta", reportePregunta);
      const url = `${this.baseUrl}/${idAsignatura}/test/${idTest}/reportarPregunta/${idPregunta}`;
      return this.http.post(url, reportePregunta, httpOptions);
    }





  crearPregunta(idAsignatura: number, idTema: number, formValue: any): Observable<Pregunta> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.baseUrl}/${idAsignatura}/temas/${idTema}/crearPregunta`;

    const { pregunta, respuestas, respuestaCorrecta } = formValue;

    const respuestasString = respuestas.join(',');


    const body = pregunta;
    const params = {
      respuestas: respuestasString,
      respuestaCorrecta: respuestaCorrecta
    };


    return this.http.post<Pregunta>(url, body, { headers, params });
  }



  createTest(testData: any, selectedPreguntaIds: string): Observable<any> {
    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      //params: new HttpParams().set('selectedPreguntaIds', selectedPreguntaIds)
    };
    const fullUrl = `${this.baseUrl}/1/crearTest?selectedPreguntaIds=${selectedPreguntaIds}`;

    return this.http.post<any>(fullUrl, testData, httpOptions); // Asegúrate de enviar los datos correctos en 'testData'
  }


  getElegiblePreguntas(listaTemas: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    console.log(`${this.baseUrl}/1/test/preguntasElegibles?listaTemas=${listaTemas}`);
    return this.http.get<any>(`${this.baseUrl}/1/test/preguntasElegibles?listaTemas=${listaTemas}`, httpOptions);
  }


  getTests(idAsignatura: number): Observable<any> {
    console.log("Test.Service: getTests");
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/${idAsignatura}/test`, httpOptions);
  }


  realizarTest(idRespuesta: number, idAsignatura: number, idTest: number, inicio: boolean): Observable<any> {
    console.log("Test.Service: realizarTest");
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      params: new HttpParams().set('inicio', inicio).set('idRespuesta', idRespuesta)
    };
    console.log('${this.baseUrl}/${idAsignatura}/test/${idTest}/realizarTest')
    console.log(inicio, idRespuesta);
    return this.http.get<any>(`${this.baseUrl}/${idAsignatura}/test/${idTest}/realizarTest`, httpOptions)
      .pipe(
        tap(data => {
          // Guardamos la pregunta obtenida en el servicio
          this.preguntaActual = data;
          console.log("pregunta actual", data)
        })
      );
  }

  getTestResultados(idAsignatura: number, idTest: number): Observable<any> {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    // Construye la URL para obtener los resultados del test
    const url = `${this.baseUrl}/${idAsignatura}/test/${idTest}/resultadoTest`;

    // Realiza la solicitud GET y devuelve un Observable
    return this.http.get<any>(url, httpOptions);
  }

  // Variable para almacenar la pregunta
  private _preguntaActual: any;

  // Método setter para guardar la pregunta actual
  set preguntaActual(pregunta: any) {
    this._preguntaActual = pregunta;
  }

  // Método getter para recuperar la pregunta actual
  get preguntaActual(): any {
    return this._preguntaActual;
  }
}