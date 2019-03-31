import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  product = {} as Product;

  constructor(public productService: ProductService){ }

  ngOnInit() {
  }

  addProduct(){
    if(this.product.name !== '' && this.product.description !== '' && this.product.price !== 0){
      this.product.recomendado = false;
      this.product.promocionado = false;
      this.productService.addProduct(this.product);
      this.product ={} as Product;
    }
  }
}
