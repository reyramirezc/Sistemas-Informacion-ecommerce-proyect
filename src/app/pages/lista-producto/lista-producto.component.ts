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

  promocionarProduct: Product;
  promocionar: boolean = false;

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


  agregarRecomendado(event, product){
    this.editingProduct = product;
    this.editingProduct.recomendado = true;
    this.productService.updateProduct(this.editingProduct);
  }

  eliminarRecomendado(event, product){
    this.editingProduct = product;
    this.editingProduct.recomendado = false;
    this.productService.updateProduct(this.editingProduct);
  }

  promocionarProducto(event, product){
    this.promocionarProduct = product;
    this.promocionarProduct.oldprice = this.promocionarProduct.price;
    this.productService.updateProduct(this.promocionarProduct);
    this.promocionar = !this.promocionar;
  }

  actualizarPromocionado(){
    this.promocionarProduct.promocionado = true;
    this.productService.updateProduct(this.promocionarProduct);
    this.promocionarProduct = {} as Product;
    this.promocionar = false;
  }

  eliminarPromocionado(event, product){
    this.promocionarProduct = product;
    this.promocionarProduct.price = this.promocionarProduct.oldprice;
    this.promocionarProduct.promocionado = false;
    this.productService.updateProduct(this.promocionarProduct);
  }

  updateProduct(){
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }


    


}
