import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../clase/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  obtenerProductos() {
    throw new Error('Method not implemented.');
  }

  private urlBase = "http://localhost:8080/api-producto/producto";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerProducto(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }
  
  agregarProducto(cliente: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarProducto(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

}
