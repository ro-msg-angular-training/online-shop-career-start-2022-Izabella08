import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../entities/product';
import { ProductIdQuantity } from '../entities/productIdQuantity';
import { CartService } from '../services/cartService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart = new Array<ProductIdQuantity>;

  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }


  doOrder(){
    this.cartService.checkout().subscribe(() => alert('Order sent succesfully!'));
  }
  
}
