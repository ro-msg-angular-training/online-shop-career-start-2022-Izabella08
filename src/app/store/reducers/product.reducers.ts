import { createReducer,on } from '@ngrx/store';
import { GetProductList, GetProductListeError, GetProductListSuccess, GetProduct, GetProductSucces, GetProductError,
  DeleteProduct, DeleteProductSuccess, DeleteProductError, EditProduct, EditProductError, EditProductSuccess,
  AddProduct, AddProductError, AddProductSuccess } from '../actions/product.actions';
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

  on(GetProductListeError, (state, { error }) => ({
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

  on(GetProductError, (state) => ({
    ...state,
    status: 'error',
  })),

  on(DeleteProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(DeleteProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(DeleteProductError, (state) => ({
    ...state,
    status: 'error',
  })),

  on(EditProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(EditProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(EditProductError, (state) => ({
    ...state,
    status: 'error',
  })),

  on(AddProduct, (state) => ({
    ...state,
    status: 'loading',
  })),

  on(AddProductSuccess, (state) => ({
    ...state,
    status: 'success',
  })),

  on(AddProductError, (state) => ({
    ...state,
    status: 'error',
  })),
  
)


   