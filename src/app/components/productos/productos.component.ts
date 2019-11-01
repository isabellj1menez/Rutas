import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public loading: boolean = true;
  public productosRecibidos =[];

  constructor(private router: Router, private productoservicio: ProductoService) { 
    this.productosRecibidos = this.productoservicio.productosreturn()
  }

  ngOnInit() {

    setTimeout(()=>{
      this.loading=false;
    },2000) 

  }

  public Informacion(idProducto){
    this.router.navigate(['producto',idProducto])
  }
}
