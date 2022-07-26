import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { loginReducers } from "./login.reducers";
import {productReducers} from "./product.reducers";
import { shoppingCartReducers } from "./shopping-cart.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  products: productReducers,
  shoppingCart: shoppingCartReducers,
  login: loginReducers
};