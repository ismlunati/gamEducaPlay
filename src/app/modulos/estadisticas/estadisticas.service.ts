import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadisticasPreguntasPorTemasDTO } from './model/EstadisticasPreguntasPorTemasDTO';
import { Observable } from 'rxjs';
import { EstadisticasPreguntasPorAlumnosDTO } from './model/EstadisticasPreguntasPorAlumnosDTO';
import { EstadisticasTestPorTestDTO } from './model/EstadisticasTestPorTestDTO';
import { EstadisticasTestPorAlumnosDTO } from './model/EstadisticasTestPorAlumnosDTO';
import { EstadisticasReportesAlumnosDTO } from './model/EstadisticasReportesAlumnosDTO';
import { TierList } from './model/TierList';
import { ListaAlumnosAndTierListDTO } from './model/ListaAlumnosAndTierListDTO';
import { AlumnosAndTiersDTO } from './model/AlumnosAndTiersDTO';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private urlApi='http://localhost:8081/asignaturas';


  constructor(private http: HttpClient) { }


  getEstadisticasPreguntaPorTemas(idAsignatura:number): Observable<EstadisticasPreguntasPorTemasDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasPreguntasPorTemasDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/preguntasPorTemas`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasPreguntaPorAlumnos(idAsignatura:number): Observable<EstadisticasPreguntasPorAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasPreguntasPorAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/preguntasPorAlumnos`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasTestPorTest(idAsignatura:number): Observable<EstadisticasTestPorTestDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasTestPorTestDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/testPorTest`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getEstadisticasTestPorAlumnos(idAsignatura:number): Observable<EstadisticasTestPorAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasTestPorAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/testPorAlumnos`, httpOptions); // Asegúrate de usar tu URL correcta
  }




  getEstadisticasReportesAlumnos(idAsignatura:number, tipoReporte:string): Observable<EstadisticasReportesAlumnosDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<EstadisticasReportesAlumnosDTO[]>(`${this.urlApi}/${idAsignatura}/estadisticas/${tipoReporte}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getTierList(idAsignatura:number): Observable<TierList[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<TierList[]>(`${this.urlApi}/${idAsignatura}/estadisticas/tierList`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  
  postTierList(idAsignatura:number, tierList:FormData): Observable<TierList> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<TierList>(`${this.urlApi}/${idAsignatura}/estadisticas/tierList`, tierList, httpOptions); // Asegúrate de usar tu URL correcta
  }


  postAlumnosATiers(idAsignatura:number, idTierList:number, resultado:AlumnosAndTiersDTO): Observable<TierList> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<TierList>(`${this.urlApi}/${idAsignatura}/estadisticas/tierList/${idTierList}/añadirAlumnosATiers`, resultado, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getTier(idAsignatura:number, idTier:number): Observable<ListaAlumnosAndTierListDTO> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<ListaAlumnosAndTierListDTO>(`${this.urlApi}/${idAsignatura}/estadisticas/tierList/${idTier}`, httpOptions); // Asegúrate de usar tu URL correcta
  }
}
