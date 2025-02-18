import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clase/cliente';
import { Material } from '../clase/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private urlBase = "http://localhost:8080/api-material/material";

  constructor(private clienteHttp: HttpClient) { }
  
  obtenerMaterial(): Observable<Material[]> {
    return this.clienteHttp.get<Material[]>(this.urlBase);
  }
  
  agregarMaterial(cliente: Material): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, cliente);
  }
  
  eliminarMaterial(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  
  obtenerMaterialPorId(id: number): Observable<Material> {
    return this.clienteHttp.get<Material>(`${this.urlBase}/${id}`);
  }
}
