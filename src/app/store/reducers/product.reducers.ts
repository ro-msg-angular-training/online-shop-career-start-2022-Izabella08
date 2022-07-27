import { createReducer,on } from '@ngrx/store';
import { GetProductList, Error, GetProductListSuccess, GetProduct, GetProductSucces,
  DeleteProduct, DeleteProductSuccess, EditProduct, EditProductSuccess,
  AddProduct, AddProductSuccess } from '../actions/product.actions';
import { initialProductState } from '../state/product.state';

export const productReducers = createReducer(
  initialProductState,

  on(GetProductList, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(GetProductListSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),

  on(Error, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(GetProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(GetProductSucces, (state, { product }) => ({
    ...state,
    status: 'success',
    selectedProduct: product
  })),

  on(DeleteProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(DeleteProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(EditProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(EditProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(AddProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(AddProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

)


   