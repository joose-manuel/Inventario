import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../../clase/material'; 
import { Persona } from '../../clase/persona';   
import { Producto } from '../../clase/producto'; 

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  private urlBasePersona = "http://localhost:8080/api-persona/persona";
  private urlBaseMaterial = "http://localhost:8080/api-material/material";
  private urlBaseProducto = "http://localhost:8080/api-producto/producto";  // URL para productos

  personas: Persona[] = [];
  materiales: Material[] = [];
  productos: Producto[] = [];

  constructor(private clienteHttp: HttpClient) { }

  ngOnInit(): void {
    this.obtenerPersonas();
    this.obtenerMateriales();
    this.obtenerProductos();
  }

  // Métodos para Persona
    obtenerPersonas(): void {
    this.clienteHttp.get<Persona[]>(this.urlBasePersona).subscribe(
      (data) => {
        this.personas = data;
        console.log('Personas obtenidas:', this.personas);
      },
      (error) => console.error('Error al obtener personas:', error)
    );
  }
  agregarPersona(persona: Persona): void {
    this.clienteHttp.post(this.urlBasePersona, persona).subscribe(
      (response) => console.log('Persona agregada:', response),
      (error) => console.error('Error al agregar persona:', error)
    );
  }

  eliminarPersona(id: number): void {
    this.clienteHttp.delete(`${this.urlBasePersona}/${id}`).subscribe(
      (response) => {
        console.log('Persona eliminada e:', response);
        this.obtenerPersonas(); // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar persona:', error)
    );
  }

  obtenerPersonaPorId(id: number): void {
    this.clienteHttp.get<Persona>(`${this.urlBasePersona}/${id}`).subscribe(
      (data) => console.log('Persona obtenida por ID:', data),
      (error) => console.error('Error al obtener persona por ID:', error)
    );
  }

  // Métodos para Material
  obtenerMateriales(): void {
    this.clienteHttp.get<Material[]>(this.urlBaseMaterial).subscribe(
      (data) => {
        this.materiales = data;
        console.log('Materiales obtenidos:', this.materiales);
      },
      (error) => console.error('Error al obtener materiales:', error)
    );
  }

  agregarMaterial(material: Material): void {
    this.clienteHttp.post(this.urlBaseMaterial, material).subscribe(
      (response) => console.log('Material agregado:', response),
      (error) => console.error('Error al agregar material:', error)
    );
  }

  eliminarMaterial(id: number): void {
    this.clienteHttp.delete(`${this.urlBaseMaterial}/${id}`).subscribe(
      (response) => {
        console.log('Material eliminado:', response);
        this.obtenerMateriales(); // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar material:', error)
    );
  }

  obtenerMaterialPorId(id: number): void {
    this.clienteHttp.get<Material>(`${this.urlBaseMaterial}/${id}`).subscribe(
      (data) => console.log('Material obtenido por ID:', data),
      (error) => console.error('Error al obtener material por ID:', error)
    );
  }

  // Métodos para Producto
  obtenerProductos(): void {
    this.clienteHttp.get<Producto[]>(this.urlBaseProducto).subscribe(
      (data) => {
        this.productos = data;
        console.log('Productos obtenidos:', this.productos);
      },
      (error) => console.error('Error al obtener productos:', error)
    );
  }

  agregarProducto(producto: Producto): void {
    this.clienteHttp.post(this.urlBaseProducto, producto).subscribe(
      (response) => console.log('Producto agregado:', response),
      (error) => console.error('Error al agregar producto:', error)
    );
  }

  eliminarProducto(id: number): void {
    this.clienteHttp.delete(`${this.urlBaseProducto}/${id}`).subscribe(
      (response) => {
        console.log('Producto eliminado:', response);
        this.obtenerProductos(); // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar producto:', error)
    );
  }

  obtenerProductoPorId(id: number): void {
    this.clienteHttp.get<Producto>(`${this.urlBaseProducto}/${id}`).subscribe(
      (data) => console.log('Producto obtenido por ID:', data),
      (error) => console.error('Error al obtener producto por ID:', error)
    );
  }
}
