import {RouterReducerState} from "@ngrx/router-store";
import { ILoginState, initialLoginState } from "./login.state";
import {initialProductState, IProductState} from "./product.state";
import { initialShoppingCartState, IShoppingCartState } from "./shopping-cart.state";

export interface IAppState {
  router?: RouterReducerState;
  products: IProductState;
  shoppingCart: IShoppingCartState;
  login: ILoginState;
}

export const initialAppState: IAppState = {
  products: initialProductState,
  shoppingCart: initialShoppingCartState,
  login: initialLoginState
}

export function getInitialState(): IAppState {
  return initialAppState;
}