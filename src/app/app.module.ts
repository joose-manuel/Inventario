import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './code/componentes/header/header.component';
import { LoginComponent } from './code/componentes/login/login.component';
import { LoadingScreenComponent } from './code/componentes/loading-screen/loading-screen.component';
import { ModalComponent } from './code/componentes/modal/modal.component';
import { BarraLateralComponent } from './code/componentes/barra-lateral/barra-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { CentroPrinciaplComponent } from './code/componentes/centro-princiapl/centro-princiapl.component';
import { FondoComponent } from './fondo/fondo.component';
import { CrearProductosComponent } from './code/componentes/crear-productos/crear-productos.component';
import { RegistroTareasComponent } from './code/componentes/registro-tareas/registro-tareas.component';
import { RegistrarMaterialComponent } from './code/componentes/registrar-material/registrar-material.component';
import { ListarInventarioComponent } from './code/componentes/listar-inventario/listar-inventario.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoadingScreenComponent,
    ModalComponent,
    BarraLateralComponent,
    CentroPrinciaplComponent,
    FondoComponent,
    CrearProductosComponent,
    RegistroTareasComponent,
    RegistrarMaterialComponent,
    ListarInventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
