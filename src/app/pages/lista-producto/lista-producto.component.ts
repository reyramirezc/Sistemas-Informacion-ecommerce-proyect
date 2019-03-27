import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  products = [];
  editingProduct: Product;
  editing: boolean = false;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(event, product){
    this.productService.deleteProduct(product);
  }

  editProduct(event, product){
    this.editingProduct = product;
    this.editing = !this.editing;
  }

  updateProduct(){
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }

}
