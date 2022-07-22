import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
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
  productSubscriptions : Subscription[] = [];

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.productSubscriptions.push(this.productService.getProductById(this.id).subscribe(product => this.product = product));
  }

  deleteProduct(){
    this.id = this.route.snapshot.paramMap.get("id");
    this.productSubscriptions.push(this.productService.deleteProduct(this.id).subscribe(() => Swal.fire("Product deleted successfully!") ));
  }

  addProductToCart(id: number){
    this.cartService.addProductToCart(id);
  }

  ngOnDestroy(){
    this.productSubscriptions.forEach(element => {
      if(element !== undefined)  
        element.unsubscribe();
    });
  }

}
