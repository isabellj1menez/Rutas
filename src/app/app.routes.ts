import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoinfoComponent } from './components/productoinfo/productoinfo.component';
import { BusquedaproductosComponent } from './components/busquedaproductos/busquedaproductos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'busqueda/:buscarproductos', component: BusquedaproductosComponent },
  { path: 'producto/:ProductosID', component: ProductoinfoComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);




