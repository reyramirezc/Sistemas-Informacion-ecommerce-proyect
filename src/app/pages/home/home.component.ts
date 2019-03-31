import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  product = {} as Product;
  products = [];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }




  

}
