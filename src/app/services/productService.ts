import { Observable, of } from "rxjs";
import { Product } from "../entities/product";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    
    constructor( private httpService: HttpClient){
    }

    URL = "http://localhost:3000/products";

    getProducts(): Observable<Product[]> {
        return this.httpService.get<Product[]>(this.URL);
    }

    getProductById(id: string | null): Observable<Product>{
        const products = this.getProducts();
        return this.httpService.get<Product>(this.URL + '/' + id);
    }

    deleteProduct(id: string | null){
        return this.httpService.delete(this.URL + '/' + id);
    }
    
    editProduct(id: number, product: Product){
        return this.httpService.put(this.URL + '/' + id, product);
    }

    addNewProduct(product: Product){
        return this.httpService.post(this.URL+'/',product);
    }
 }