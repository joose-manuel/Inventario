import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proceso } from '../clase/proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerProceso(): Observable<Proceso[]> {
    return this.clienteHttp.get<Proceso[]>(this.urlBase);
  }
  
  agregarProceso(cliente: Proceso): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarProceso(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerProcesoPorId(id: number): Observable<Proceso> {
    return this.clienteHttp.get<Proceso>(`${this.urlBase}/${id}`);
  }
}
