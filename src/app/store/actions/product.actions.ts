import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/entities/product';

export const GetProductList = createAction(
  '[Product] Load Products'
)

export const GetProductListSuccess = createAction(
  '[Product] Success in getting the list of products',
  props<{ products: Product[] }>()
);

export const GetProductListeError = createAction(
  '[Product] Error in reading the list of products',
  props<{ error: string }>()
);

export const GetProduct = createAction(
  '[Product] Get Product',
  props<{ id: string }>()
)

export const GetProductSucces = createAction(
  '[Product] Get Product Success',
  props<{ product: Product }>()
)

export const GetProductError = createAction(
  '[Product] Get Product Error',
  props<{error: any }>()
)

export const DeleteProduct = createAction (
  '[Product] Delete Product',
  props<{id: string}>()
)

export const DeleteProductSuccess = createAction (
  '[Product] Delete Product Success'
)

export const DeleteProductError = createAction (
  '[Product] Delete Product Error',
  props<{error: any}>()
)

export const EditProduct = createAction (
  '[Product] Edit Product',
  props<{id: number, product: Product}>()
)

export const EditProductSuccess = createAction (
  '[Product] Edit Product Success',
  props<{ product: Product }>()
)

export const EditProductError = createAction (
  '[Product] Edit Product Error',
  props<{error: any}>()
)

export const AddProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
)

export const AddProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
)

export const AddProductError = createAction(
  '[Product] Add Product Error',
  props<{error: any}>()
)