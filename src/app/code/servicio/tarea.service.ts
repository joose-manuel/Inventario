import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../clase/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerTarea(): Observable<Tarea[]> {
    return this.clienteHttp.get<Tarea[]>(this.urlBase);
  }
  
  agregarTarea(cliente: Tarea): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarTarea(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerTareaPorId(id: number): Observable<Tarea> {
    return this.clienteHttp.get<Tarea>(`${this.urlBase}/${id}`);
  }
}
