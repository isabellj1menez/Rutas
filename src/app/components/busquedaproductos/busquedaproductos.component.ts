import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';



@Component({
  selector: 'app-busquedaproductos',
  templateUrl: './busquedaproductos.component.html',
  styleUrls: ['./busquedaproductos.component.css']
})
export class BusquedaproductosComponent implements OnInit {

  public parametroBusqueda :string = '';
  public ProductosFiltrados : any = {};
  public loading = true;

  constructor(private rutaActiva:ActivatedRoute, private ServicioPro: ProductoService, private router:Router ) {

    this.rutaActiva.params.subscribe((parametro)=>{
      //imprime el arreglo  console.log(parametro)
      //imprime el valor de arreglo  console.log(parametro.buscarproductos)
      
      this.loading=false;

      this.parametroBusqueda = parametro.buscarproductos;
      this.ProductosFiltrados = this.ServicioPro.Buscarproductos(this.parametroBusqueda);
      console.log(this.ProductosFiltrados)

    })


   }

  ngOnInit() {
  }

  public Informacion(idProducto){
    this.router.navigate(['producto',idProducto])
  }
}






