import { Observable, of } from "rxjs";
import { Product } from "../entities/product";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    
    constructor( private httpService: HttpClient){
    }

    getProducts(): Observable<Product[]> {
        return this.httpService.get<Product[]>(environment.productsURL);
    }

    getProductById(id: string | null): Observable<Product>{
        const products = this.getProducts();
        return this.httpService.get<Product>(environment.productsURL + '/' + id);
    }

    deleteProduct(id: string | null){
        return this.httpService.delete(environment.productsURL + '/' + id);
    }
    
    editProduct(id: number, product: Product){
        return this.httpService.put(environment.productsURL + '/' + id, product);
    }

    addNewProduct(product: Product){
        return this.httpService.post(environment.productsURL +'/',product);
    }
 }