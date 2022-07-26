import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IProductState } from '../state/product.state';

export const selectProducts = (state: IAppState) => state.products;
export const productsSelector = createFeatureSelector<IProductState>('products');

export const selectProductList = createSelector(
    selectProducts,
    (state: IProductState) => state.products
);

export const selectProduct = createSelector(
    productsSelector,
    (state: IProductState) => state.selectedProduct
)

