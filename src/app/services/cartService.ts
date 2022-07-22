import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ProductIdQuantity } from "../entities/productIdQuantity";

@Injectable({
    providedIn: 'root'
})

export class CartService {

    URL: "http://localhost:3000/products"

    constructor( private httpService: HttpClient){
    }

    shoppingCart: ProductIdQuantity[] = [];

    addProductToCart(id: number) {
        let newProduct = this.shoppingCart.find( p => p.productId == id);
        if(newProduct == undefined)
            this.shoppingCart.push({productId: id, quantity: 1});
        else    
            newProduct.quantity += 1;
    }

    getCart(){
        return this.shoppingCart;
    }
  
    checkout(){
        return this.httpService.post(this.URL + '/orders' , this.getCart(), { responseType: 'text' });
    }
 }