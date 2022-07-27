import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { CartService } from 'src/app/services/cartService';
import { from, of, tap} from "rxjs";
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/productService';
import { catchError, map, switchMap, concatMap  } from 'rxjs/operators';
import { Checkout, CheckoutOrderError, CheckoutOrderSuccess} from '../actions/shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {

  constructor(
    private actions$: Actions, 
    private cartService: CartService, 
    private productService: ProductService,
    private router: Router
  ) {}


  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Checkout),
      switchMap(() => this.cartService.checkout().pipe(
        map(() => CheckoutOrderSuccess()),
        catchError((error) => of(CheckoutOrderError({ error })))
      )),
    ),
  );
}



