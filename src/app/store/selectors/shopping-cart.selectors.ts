import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IShoppingCartState } from '../state/shopping-cart.state';

export const selectShoppingCartState = (state: IAppState) => state.shoppingCart;

export const selectShoppingCart = createSelector(
  selectShoppingCartState,
  (state: IShoppingCartState) => state.products
);
