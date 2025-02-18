import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './code/componentes/login/login.component';
import { CentroPrinciaplComponent } from './code/componentes/centro-princiapl/centro-princiapl.component';
import { CrearProductosComponent } from './code/componentes/crear-productos/crear-productos.component';
import { RegistrarMaterialComponent } from './code/componentes/registrar-material/registrar-material.component';
import { ListarInventarioComponent } from './code/componentes/listar-inventario/listar-inventario.component';
import { RegistroTareasComponent } from './code/componentes/registro-tareas/registro-tareas.component';

const routes: Routes = [
  {path:'tarea',component:RegistroTareasComponent},
  {path:'inventario',component:ListarInventarioComponent},
  {path:'centro',component:CentroPrinciaplComponent},
  {path:'material',component:RegistrarMaterialComponent},
  {path:'registrar-prouctos',component:CrearProductosComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/centro',pathMatch:"full"}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
