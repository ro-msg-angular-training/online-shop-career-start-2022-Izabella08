import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/entities/product';
import { ProductIdQuantity } from 'src/app/entities/productIdQuantity';


export const AddItemToCart = createAction(
  '[Product] Add Product To Cart', 
  props<{ id: number }>()
);

export const AddItemToCartSuccess = createAction(
  '[Product] Add Product To Cart Success',
)

export const Error = createAction(
  '[ShoppingCart] Error',
  props<{ error: string }>()
);

export const Checkout = createAction(
  '[Checkout] Checkout', 
  props<{ products: ProductIdQuantity[] }>()
);

export const CheckoutOrderSuccess = createAction(
  '[Checkout] Checkout Success'
);


