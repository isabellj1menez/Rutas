import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoinfoComponent } from './components/productoinfo/productoinfo.component';
import { BusquedaproductosComponent } from './components/busquedaproductos/busquedaproductos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    AboutComponent,
    HomeComponent,
    ProductosComponent,
    ProductoinfoComponent,
    BusquedaproductosComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
