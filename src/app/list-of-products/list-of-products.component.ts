import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { ProductService } from '../services/productService';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})

export class ListOfProductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  products$: Observable<Product[]>;

  ngOnInit() {
      this.products$ = this.productService.getProducts();
  }

}
