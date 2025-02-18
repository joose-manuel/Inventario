import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../clase/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerProveedor(): Observable<Proveedor[]> {
    return this.clienteHttp.get<Proveedor[]>(this.urlBase);
  }
  
  agregarProveedor(cliente: Proveedor): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarProveedor(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerProveedorPorId(id: number): Observable<Proveedor> {
    return this.clienteHttp.get<Proveedor>(`${this.urlBase}/${id}`);
  }
}
