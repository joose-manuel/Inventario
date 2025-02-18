import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from '../../clase/material';
import { Persona } from '../../clase/persona';
import { Producto } from '../../clase/producto';

@Component({
  selector: 'app-registrar-material',
  templateUrl: './registrar-material.component.html',
  styleUrls: ['./registrar-material.component.css']
})
export class RegistrarMaterialComponent implements OnInit {

  // URLs para los servicios de persona, material y producto
  private urlBasePersona = "http://localhost:8080/api-persona/persona";
  private urlBaseMaterial = "http://localhost:8080/api-material/material";
  private urlBaseProducto = "http://localhost:8080/api-producto/producto";

  personas: Persona[] = [];
  materiales: Material[] = [];
  productos: Producto[] = [];

  material: Material = new Material();
  persona: Persona = new Persona();
  producto: Producto = new Producto();

  constructor(private clienteHttp: HttpClient) { }

  ngOnInit(): void {
    this.obtenerMateriales();
    this.obtenerPersonas();
    this.obtenerProductos();
  }

  // Método para obtener todas las personas
  obtenerPersonas(): void {
    this.clienteHttp.get<Persona[]>(this.urlBasePersona).subscribe(
      (data) => {
        this.personas = data;
        console.log('Personas obtenidas:', this.personas);
      },
      (error) => console.error('Error al obtener personas:', error)
    );
  }

  // Método para obtener todos los materiales
  obtenerMateriales(): void {
    this.clienteHttp.get<Material[]>(this.urlBaseMaterial).subscribe(
      (data) => {
        this.materiales = data;
        console.log('Materiales obtenidos:', this.materiales);
      },
      (error) => console.error('Error al obtener materiales:', error)
    );
  }

  // Método para obtener todos los productos
  obtenerProductos(): void {
    this.clienteHttp.get<Producto[]>(this.urlBaseProducto).subscribe(
      (data) => {
        this.productos = data;
        console.log('Productos obtenidos:', this.productos);
      },
      (error) => console.error('Error al obtener productos:', error)
    );
  }

  // Método para agregar un nuevo material
  agregarMaterial(): void {
    this.clienteHttp.post(this.urlBaseMaterial, this.material).subscribe(
      (data) => {
        console.log('Material agregado correctamente', data);
        this.obtenerMateriales();  // Actualizar la lista después de agregar
        this.reiniciarFormulario();
      },
      (error) => console.error('Error al agregar material:', error)
    );
  }

  // Método para agregar una nueva persona
  agregarPersona(): void {
    this.clienteHttp.post(this.urlBasePersona, this.persona).subscribe(
      (data) => {
        console.log('Persona agregada correctamente', data);
        this.obtenerPersonas();  // Actualizar la lista después de agregar
        this.reiniciarFormulario();
      },
      (error) => console.error('Error al agregar persona:', error)
    );
  }

  // Método para agregar un nuevo producto
  agregarProducto(): void {
    this.clienteHttp.post(this.urlBaseProducto, this.producto).subscribe(
      (data) => {
        console.log('Producto agregado correctamente', data);
        this.obtenerProductos();  // Actualizar la lista después de agregar
        this.reiniciarFormulario();
      },
      (error) => console.error('Error al agregar producto:', error)
    );
  }

  // Método para eliminar un material por ID
  eliminarMaterial(id: number): void {
    this.clienteHttp.delete(`${this.urlBaseMaterial}/${id}`).subscribe(
      (data) => {
        console.log('Material eliminado correctamente');
        this.obtenerMateriales();  // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar material:', error)
    );
  }

  // Método para eliminar una persona por ID
  eliminarPersona(id: number): void {
    this.clienteHttp.delete(`${this.urlBasePersona}/${id}`).subscribe(
      (data) => {
        console.log('Persona eliminada correctamente');
        this.obtenerPersonas();  // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar persona:', error)
    );
  }

  // Método para eliminar un producto por ID
  eliminarProducto(id: number): void {
    this.clienteHttp.delete(`${this.urlBaseProducto}/${id}`).subscribe(
      (data) => {
        console.log('Producto eliminado correctamente');
        this.obtenerProductos();  // Actualizar la lista después de eliminar
      },
      (error) => console.error('Error al eliminar producto:', error)
    );
  }

  // Método para reiniciar el formulario
  reiniciarFormulario(): void {
    this.material = new Material();
    this.persona = new Persona();
    this.producto = new Producto();
  }
}
