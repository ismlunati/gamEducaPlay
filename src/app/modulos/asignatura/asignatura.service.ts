import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from './model/asignatura';
import { Alumno } from '../usuario/model/Alumno';
import { Tema } from '../tema/model/Tema';
import { Reto } from '../retos/model/Reto';
import { Artefacto } from '../artefactos/model/Artefacto';
import { AlumnoRetoDTO } from '../retos/model/AlumnoRetoDTO';
import { ArtefactoCompraDTO } from '../artefactos/model/ArtefactoCompraDTO';
import { Logro } from '../logros/model/Logro';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private urlApi='http://localhost:8081/asignaturas';

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<Asignatura[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Asignatura[]>(this.urlApi, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getAsignaturaListaSolicitudes(idAsignatura: number): Observable<Alumno[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Alumno[]>(`${this.urlApi}/${idAsignatura}/listaSolicitudesPendientes`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getAsignaturaPorId(idAsignatura: number): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Asignatura>(`${this.urlApi}/${idAsignatura}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getLogroPorId(idAsignatura: number, idLogro: number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Logro>(`${this.urlApi}/${idAsignatura}/logrosDTO/${idLogro}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getTemaPorId(idAsignatura: number, idTema:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Tema>(`${this.urlApi}/${idAsignatura}/temas/${idTema}`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getArtefactoPorId(idAsignatura: number, idArtefacto:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    console.log(`${this.urlApi}/${idAsignatura}/artefactosDTO/${idArtefacto}`)
    return this.http.get<Artefacto>(`${this.urlApi}/${idAsignatura}/artefactosDTO/${idArtefacto}`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getRetoPorId(idAsignatura: number, idReto:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Reto>(`${this.urlApi}/${idAsignatura}/retosDTO/${idReto}`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  getTemasPorAsignatura(idAsignatura: number): Observable<Tema[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Tema[]>(`${this.urlApi}/${idAsignatura}/temas`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  

  getArtefactosPorAsignatura(idAsignatura: number): Observable<Artefacto[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Artefacto[]>(`${this.urlApi}/${idAsignatura}/artefactosDTO`, httpOptions); // Asegúrate de usar tu URL correcta
  }
  getArtefactosPorAlumno(idAsignatura: number): Observable<ArtefactoCompraDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<ArtefactoCompraDTO[]>(`${this.urlApi}/${idAsignatura}/artefactosAlumno`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getLogrosPorAsignatura(idAsignatura: number): Observable<Logro[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Logro[]>(`${this.urlApi}/${idAsignatura}/logrosDTO`, httpOptions); // Asegúrate de usar tu URL correcta
  }

  getRetosPorAsignatura(idAsignatura: number): Observable<Reto[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Reto[]>(`${this.urlApi}/${idAsignatura}/retosDTO`, httpOptions); // Asegúrate de usar tu URL correcta
  }
  getRetosPorAsignaturaUsuario(idAsignatura: number): Observable<AlumnoRetoDTO[]> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<AlumnoRetoDTO[]>(`${this.urlApi}/${idAsignatura}/retosDeAsignaturaPorAlumno`, httpOptions); // Asegúrate de usar tu URL correcta
  }


  aceptarAlumno(idAsignatura: number, idAlumno: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${this.urlApi}/${idAsignatura}/${idAlumno}/aceptar`, {}, httpOptions);
  }


  rechazarAlumno(idAsignatura: number, idAlumno: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${this.urlApi}/${idAsignatura}/${idAlumno}/aceptar`, {}, httpOptions);
  }

  enviarCodigo(codigo: string): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    

    return this.http.post<any>(this.urlApi+'/acceder',  codigo , httpOptions);
  }



  
  crearAsignatura(asignatura: Asignatura): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Asignatura>(`${this.urlApi}`, asignatura, httpOptions);
  }


  crearTema(tema: Tema, id:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    console.log("URL CREAR TEMAS", `${this.urlApi}/${id}/temas`)
    return this.http.post<Tema>(`${this.urlApi}/${id}/temas`, tema, httpOptions);
  }

  crearArtefacto(artefacto: Artefacto, id:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token');
     // Recupera el token desde donde lo tengas almacenado
    console.log("Estoy enviando este artefacto:", artefacto );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Artefacto>(`${this.urlApi}/${id}/artefactos`, artefacto, httpOptions);
  }


  crearLogro(logro: Logro, id:number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Logro>(`${this.urlApi}/${id}/logros`, logro, httpOptions);
  }

  crearReto(reto: Reto, id:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    console.log("Este es el logro del reto septiembre", reto.logro);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post<Reto>(`${this.urlApi}/${id}/retos`, reto, httpOptions);
  }

  actualizarAsignatura(asignatura: Asignatura): Observable<Asignatura> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo asignatura actualizandose", asignatura);
    
    return this.http.put<Asignatura>(`${this.urlApi}/${asignatura.id}`, asignatura, httpOptions);
  }


  actualizarTema(tema: Tema, idAsignatura:number): Observable<Tema> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo tema actualizandose", tema);
    
    return this.http.put<Tema>(`${this.urlApi}/${idAsignatura}/temas/${tema.id}`, tema, httpOptions);
  }
  actualizarLogro(logro: Logro, idAsignatura:number): Observable<Logro> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", logro);
    
    return this.http.put<Logro>(`${this.urlApi}/${idAsignatura}/logros/${logro.id}`, logro, httpOptions);
  }

  actualizarArtefacto(artefacto: Artefacto, idAsignatura:number): Observable<Artefacto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", artefacto);
    
    return this.http.put<Artefacto>(`${this.urlApi}/${idAsignatura}/artefactos/${artefacto.id}`, artefacto, httpOptions);
  }

  actualizarReto(reto: Reto, idAsignatura:number): Observable<Reto> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    console.log("valor", reto);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    console.log("Imprimo logro actualizandose", reto);
    
    return this.http.put<Reto>(`${this.urlApi}/${idAsignatura}/retos/${reto.id}`, reto, httpOptions);
  }

  borrarAsignatura(idAsignatura: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}`, httpOptions);
  }

  borrarTema(idAsignatura: number, idTema: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/temas/${idTema}`, httpOptions);
  }


  borrarArtefacto(idAsignatura: number, idArtefacto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/artefactos/${idArtefacto}`, httpOptions);
  }


  
  canjearArtefacto(idAsignatura: number, idCompra: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get(`${this.urlApi}/${idAsignatura}/compras/canjearCompra/${idCompra}`, httpOptions);
  }

  
  aceptarCanjeo(idAsignatura: number, idCompra: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get(`${this.urlApi}/${idAsignatura}/compras/aceptarCanjeoCompra/${idCompra}`, httpOptions);
  }

    
  denegarCanjeo(idAsignatura: number, idCompra: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get(`${this.urlApi}/${idAsignatura}/compras/rechazarCanjeoCompra/${idCompra}`, httpOptions);
  }


  comprarArtefacto(idAsignatura: number, idArtefacto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    console.log("token",token )
    console.log("httpOptions",httpOptions )
    console.log(`${this.urlApi}/${idAsignatura}/compras/${idArtefacto}`, "compra")

    return this.http.post(`${this.urlApi}/${idAsignatura}/compras/${idArtefacto}`, {}, httpOptions);
  }

  borrarReto(idAsignatura: number, idReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/retos/${idReto}`, httpOptions);
  }

  cambiarDecisionReto(idAsignatura: number, idAlumnoReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post(`${this.urlApi}/${idAsignatura}/retoCambiarDecision/${idAlumnoReto}`,{},  httpOptions);
  }

  aceptarReto(idAsignatura: number, idAlumnoReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post(`${this.urlApi}/${idAsignatura}/retoAceptar/${idAlumnoReto}`,{},  httpOptions);
  }

  rechazarReto(idAsignatura: number, idAlumnoReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post(`${this.urlApi}/${idAsignatura}/retoRechazar/${idAlumnoReto}`, {}, httpOptions);
  }
  


  unirseReto(idAsignatura: number, idReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    console.log(idAsignatura,"asd", idReto)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    console.log(`${this.urlApi}/${idAsignatura}/asignarseReto/${idReto}`);
    return this.http.post(`${this.urlApi}/${idAsignatura}/asignarseReto/${idReto}`,{},  httpOptions);
  }


  finalizarReto(idAsignatura: number, idReto: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.post(`${this.urlApi}/${idAsignatura}/finalizarReto/${idReto}`, {},  httpOptions);
  }

  borrarLogro(idAsignatura: number, idLogro: number): Observable<any> {

    const token = sessionStorage.getItem('token'); // Recupera el token desde donde lo tengas almacenado
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete(`${this.urlApi}/${idAsignatura}/logros/${idLogro}`, httpOptions);
  }

}
