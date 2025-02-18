import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../clase/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerClientes(): Observable<Cliente[]> {
    return this.clienteHttp.get<Cliente[]>(this.urlBase);
  }
  
  agregarClientes(cliente: Cliente): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarClientes(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerClientesPorId(id: number): Observable<Cliente> {
    return this.clienteHttp.get<Cliente>(`${this.urlBase}/${id}`);
  }

}
