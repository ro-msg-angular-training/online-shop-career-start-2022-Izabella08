import { ProductIdQuantity } from "./productIdQuantity";

export interface Order {
    customer: string;
    products: ProductIdQuantity[];
}