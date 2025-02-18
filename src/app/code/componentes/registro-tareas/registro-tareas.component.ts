import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../clase/tarea';
import { TareaService } from '../../servicio/tarea.service';



@Component({
  selector: 'app-registro-tareas',
  templateUrl: './registro-tareas.component.html',
  styleUrls: ['./registro-tareas.component.css']
})
export class RegistroTareasComponent implements OnInit {

  tareas: Tarea[] = []; // Arreglo para almacenar las tareas
  nuevaTarea: Tarea = new Tarea(); // Objeto para agregar una nueva tarea
  idTarea: number = 0; // Variable para eliminar o buscar una tarea por ID

  constructor(private tareaService: TareaService) { } // Inyecta el servicio

  ngOnInit(): void {
    this.obtenerTareas(); // Obtiene las tareas al iniciar el componente
  }

  // Método para obtener todas las tareas
  obtenerTareas(): void {
    this.tareaService.obtenerTarea().subscribe(
      (data: Tarea[]) => {
        this.tareas = data;
      },
      error => {
        console.error('Error al obtener las tareas', error);
      }
    );
  }

  // Método para agregar una nueva tarea
  agregarTarea(): void {
    this.tareaService.agregarTarea(this.nuevaTarea).subscribe(
      response => {
        console.log('Tarea agregada con éxito', response);
        this.obtenerTareas(); // Actualiza la lista después de agregar
        this.nuevaTarea = new Tarea(); // Resetea el formulario
      },
      error => {
        console.error('Error al agregar la tarea', error);
      }
    );
  }

  // Método para eliminar una tarea por ID
  eliminarTarea(id: number): void {
    this.tareaService.eliminarTarea(id).subscribe(
      response => {
        console.log('Tarea eliminada con éxito', response);
        this.obtenerTareas(); // Actualiza la lista después de eliminar
      },
      error => {
        console.error('Error al eliminar la tarea', error);
      }
    );
  }

  // Método para obtener una tarea por ID
  obtenerTareaPorId(id: number): void {
    this.tareaService.obtenerTareaPorId(id).subscribe(
      (data: Tarea) => {
        console.log('Tarea obtenida', data);
      },
      error => {
        console.error('Error al obtener la tarea por ID', error);
      }
    );
  }
}
