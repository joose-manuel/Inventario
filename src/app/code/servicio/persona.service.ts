import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clase/cliente';
import { Persona } from '../clase/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  obtenerPersonas() {
    throw new Error('Method not implemented.');
  }

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerPersona(): Observable<Persona[]> {
    return this.clienteHttp.get<Persona[]>(this.urlBase);
  }
  
  agregarPersona(cliente: Persona): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarPersona(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.clienteHttp.get<Persona>(`${this.urlBase}/${id}`);
  }
}
