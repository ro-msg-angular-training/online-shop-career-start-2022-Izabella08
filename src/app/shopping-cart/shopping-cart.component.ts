import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Product } from '../entities/product';
import { ProductIdQuantity } from '../entities/productIdQuantity';
import { CartService } from '../services/cartService';
import { Checkout } from '../store/actions/shopping-cart.actions';
import { selectShoppingCart } from '../store/selectors/shopping-cart.selectors';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart = new Array<ProductIdQuantity>;
  cartSubscription: Subscription;
  orders$ = this.store.select(selectShoppingCart);

  productsInCart: ProductIdQuantity[] = [];

  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService,
    private store: Store<IAppState>
  ) { }


  ngOnInit(): void {
    this.store.select(selectShoppingCart).subscribe((data) => this.productsInCart = data);
    console.log(this.productsInCart);
  }


  doOrder(){
    this.store.dispatch(Checkout({products: this.productsInCart}));
    alert('Order created successfully!');
  }

  ngOnDestroy(){
    if(this.cartSubscription !== undefined)
      this.cartSubscription.unsubscribe();
  }
  
}
