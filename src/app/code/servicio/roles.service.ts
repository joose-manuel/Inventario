import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clase/cliente';
import { Roles } from '../clase/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerRoles(): Observable<Roles[]> {
    return this.clienteHttp.get<Roles[]>(this.urlBase);
  }
  
  agregarRoles(cliente: Roles): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarRoles(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerRolesPorId(id: number): Observable<Roles> {
    return this.clienteHttp.get<Roles>(`${this.urlBase}/${id}`);
  }
}
