import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
    private orders: Product[] = [];

    constructor(private httpService: HttpService) { }

    getOrders(): Observable<Order[]>{
        this.httpService.makeGetRequest("/order/own").subscribe((orders) =>{
        this.orders = orders;
        }) 
        return this.httpService.makeGetRequest("/order/own");
    }
    
    postOrder(){
      return this.httpService.makePostRequest("/order", null);
    }
}
