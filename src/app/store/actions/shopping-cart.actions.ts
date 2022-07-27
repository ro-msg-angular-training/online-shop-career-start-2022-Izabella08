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

export const AddItemToCartError = createAction(
  '[Product] Add Product To Cart Error',
  props<{ error: any }>()
)

export const Checkout = createAction(
  '[Checkout] Checkout', 
  props<{ products: ProductIdQuantity[] }>()
);

export const CheckoutOrderSuccess = createAction(
  '[Checkout] Checkout Success'
);

export const CheckoutOrderError = createAction(
  '[Checkout] Checkout Error', 
  props<{ error: any }>()
);

