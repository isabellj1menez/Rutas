import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';




@Component({
  selector: 'app-productoinfo',
  templateUrl: './productoinfo.component.html',
  styleUrls: ['./productoinfo.component.css']
})
export class ProductoinfoComponent implements OnInit {

  public productoid:string="";
  public productoinfo: {} = "";

  constructor(private productoURL: ActivatedRoute, private ServicioPro: ProductoService){ 
  
    this.productoid = this.productoURL.snapshot.paramMap.get('ProductosID');
    this.productoinfo = ServicioPro.productofindID(this.productoid);
   
    
  }

  public obtenerwidth(rating){
    let porcentaje=(rating*100)/5

    return `${porcentaje}%`
  }
  ngOnInit() {
  }

}


