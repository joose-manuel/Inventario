import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remision } from '../clase/remision';

@Injectable({
  providedIn: 'root'
})
export class RemisionService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerRemision(): Observable<Remision[]> {
    return this.clienteHttp.get<Remision[]>(this.urlBase);
  }
  
  agregarRemision(cliente: Remision): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarRemision(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerRemisionPorId(id: number): Observable<Remision> {
    return this.clienteHttp.get<Remision>(`${this.urlBase}/${id}`);
  }
}
