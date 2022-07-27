import { ProductIdQuantity } from "src/app/entities/productIdQuantity";

export interface IShoppingCartState {
  products: ProductIdQuantity[];
  status: 'pending'|'loading'|'error'|'success';
}
  
export const initialShoppingCartState: IShoppingCartState = {
  products: [],
  status: 'pending',
};