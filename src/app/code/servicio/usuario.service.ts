import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerUsuario(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.urlBase);
  }
  
  agregarUsuario(cliente: Usuario): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarUsuario(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(`${this.urlBase}/${id}`);
  }
}
