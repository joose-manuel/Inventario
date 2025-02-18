import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clase/cliente';
import { Localizacion } from '../clase/localizacion';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerLocalizacion(): Observable<Localizacion[]> {
    return this.clienteHttp.get<Localizacion[]>(this.urlBase);
  }
  
  agregarLocalizacion(cliente: Localizacion): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarLocalizacion(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerLocalizacionPorId(id: number): Observable<Localizacion> {
    return this.clienteHttp.get<Localizacion>(`${this.urlBase}/${id}`);
  }
}
