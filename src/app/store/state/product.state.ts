import { Product } from "src/app/entities/product";

export interface IProductState {
    products: Product[];
    selectedProduct: Product | undefined;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
export const initialProductState: IProductState = {
    products: [],
    selectedProduct: undefined,
    status: 'pending',
  };