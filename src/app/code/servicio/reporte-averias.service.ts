import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteAverias } from '../clase/reporte-averias';

@Injectable({
  providedIn: 'root'
})
export class ReporteAveriasService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerReporteAverias(): Observable<ReporteAverias[]> {
    return this.clienteHttp.get<ReporteAverias[]>(this.urlBase);
  }
  
  agregarReporteAverias(cliente: ReporteAverias): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarCReporteAverias(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerReporteAveriasPorId(id: number): Observable<ReporteAverias> {
    return this.clienteHttp.get<ReporteAverias>(`${this.urlBase}/${id}`);
  }
}
