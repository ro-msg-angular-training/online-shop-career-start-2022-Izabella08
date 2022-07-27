import { createReducer, on } from "@ngrx/store"
import { initialShoppingCartState } from "../state/shopping-cart.state"
import { AddItemToCart, Checkout, CheckoutOrderError, CheckoutOrderSuccess, AddItemToCartSuccess, AddItemToCartError } from "../actions/shopping-cart.actions";
import { ProductIdQuantity } from "src/app/entities/productIdQuantity";

export const shoppingCartReducers = createReducer(
    initialShoppingCartState,

    on(AddItemToCart, (state, {id}) => {
      const checkProduct = state.products.find(x => x.productId === id);
      if (checkProduct === undefined) {
        return {
          ...state,
          products: [...state.products, {productId: id, quantity: 1}],
          status: "success",
          error: "",
        };
      } else {
        const newOrderedProduct = {productId: id, quantity: (checkProduct.quantity+1) };
        return {
          ...state,
          products: [...state.products.map((prod) => {
            if(prod.productId == id){
              return newOrderedProduct;
            }else{
              return prod;
            }
          })],
          status: "success",
          error: "",
        };
      }
    }),

    on(AddItemToCartSuccess,(state) => ({
      ...state,
      products: [],
      error: "",
      status: "success",
    })),

    on(AddItemToCartError, (state) => ({
      ...state,
      status: "error",
      error: "",
    })),

    on(Checkout, (state) => ({
      ...state,
      status: "loading",
    })),

    on(CheckoutOrderSuccess, (state) => ({
      ...state,
      products: [],
      status: "success",
      error: "",
    })),

    on(CheckoutOrderError, (state) => ({
      ...state,
      status: "error",
      error: "",
    }))

)