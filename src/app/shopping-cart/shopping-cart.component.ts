import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
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
  cartSubscription: Subscription;

  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }


  doOrder(){
    this.cartSubscription = this.cartService.checkout().subscribe(() => Swal.fire('Order sent successfully!'));
  }

  ngOnDestroy(){
    if(this.cartSubscription !== undefined)
      this.cartSubscription.unsubscribe();
  }
  
}
