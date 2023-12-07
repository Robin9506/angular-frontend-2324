import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [];

    constructor(private httpService: HttpService) { }

    getProducts(){
        this.httpService.makeGetRequest("/product").subscribe((products) =>{
        this.products = products;
        }) 
        return this.httpService.makeGetRequest("/product");
    }

    addProduct(product: Product){
        this.httpService.makePostRequest("/product", product).subscribe();
    }

    getSingleProductFromServer(id: string){
    return this.httpService.makeGetRequest("/product/" + id);
    }         

    deleteProduct(productId: string){
        return this.httpService.makeDeleteRequest("/product/" + productId);
    }

    editProduct(product: Product, id: string){
        return this.httpService.makePutRequest("/product/" + id , product);
    }
}
