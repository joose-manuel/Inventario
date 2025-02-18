import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clase/cliente';
import { Documento } from '../clase/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private urlBase = "http://localhost:8080/api-cliente/cliente";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerDocumento(): Observable<Documento[]> {
    return this.clienteHttp.get<Documento[]>(this.urlBase);
  }
  
  agregarDocumento(cliente: Documento): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarDocumento(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerDocumentoPorId(id: number): Observable<Documento> {
    return this.clienteHttp.get<Documento>(`${this.urlBase}/${id}`);
  }
}
