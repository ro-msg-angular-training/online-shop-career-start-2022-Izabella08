import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { ProductIdQuantity } from "../entities/productIdQuantity";

@Injectable({
    providedIn: 'root'
})

export class CartService {

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
        return this.httpService.post(environment.productsURL + '/orders' , this.getCart(), { responseType: 'text' });
    }
 }