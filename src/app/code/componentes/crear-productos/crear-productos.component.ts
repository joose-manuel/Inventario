import { Component, OnInit } from "@angular/core";
import { Producto } from "../../clase/producto";
import { ProductoService } from "../../servicio/producto.service";
 // Ajusta la ruta del servicio según tu estructura
 // Asegúrate de tener el modelo correcto

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  productos: Producto[] = []; // Array para almacenar los productos
  nuevoProducto: Producto = new Producto(); // Modelo para agregar un nuevo producto

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos(); // Llamada al método para obtener productos al iniciar el componente
  }

  // Método para obtener todos los productos
  obtenerProductos() {
    this.productoService.obtenerProducto().subscribe(
      (data: Producto[]) => {
        this.productos = data; // Asigna la respuesta al array de productos
        console.log('Productos cargados:', this.productos);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  // Método para agregar un nuevo producto
  agregarProducto() {
    this.productoService.agregarProducto(this.nuevoProducto).subscribe(
      (response) => {
        console.log('Producto agregado:', response);
        this.obtenerProductos(); // Actualiza la lista de productos
      },
      (error) => {
        console.error('Error al agregar producto:', error);
      }
    );
  }

  // Método para eliminar un producto por su ID
  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(
      (response) => {
        console.log('Producto eliminado:', response);
        this.obtenerProductos(); // Actualiza la lista de productos
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
      }
    );
  }
}
