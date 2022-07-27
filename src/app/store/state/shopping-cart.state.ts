import { ProductIdQuantity } from "src/app/entities/productIdQuantity";

export interface IShoppingCartState {
  products: ProductIdQuantity[];
  status: 'pending'|'loading'|'error'|'success';
  error: string | null;
}
  
export const initialShoppingCartState: IShoppingCartState = {
  products: [],
  status: 'pending',
  error: null
};