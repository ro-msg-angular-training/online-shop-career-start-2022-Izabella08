import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../entities/product';
import { CartService } from '../services/cartService';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  product: Product | undefined;
  productDetails: any;
  id: string | null | undefined;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.productService.getProductById(this.id).subscribe(product => this.product = product);
  }

  deleteProduct(){
    this.id = this.route.snapshot.paramMap.get("id");
    this.productService.deleteProduct(this.id).subscribe(() => {alert("Product deleted succesfully!") });
  }

  addProductToCart(id: number){
    this.cartService.addProductToCart(id);
  }

}
