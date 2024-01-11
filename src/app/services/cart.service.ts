import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
  })
export class CartService{
    public cart: Cart | undefined;
    public cart$: Subject<Cart> = new BehaviorSubject<Cart>(new Cart([]));

    constructor(private httpService: HttpService){}

    getCartFromServer(){
        this.httpService.makeGetRequest("/cart/own").subscribe({
            next: (cart: Cart) => {
                this.cart = cart;
            },
            complete: () => {
                this.setCart();
            }
        })
    }

    setCart(){
        if(this.cart != null){
            this.cart$.next(this.cart);
        }
    }

    addToCart(product: Product){
        this.httpService.makePostRequest("/cart/own/" + product.id, null).subscribe({
            complete: () => {
                this.getCartSubject();
            }   
        });
      
    }

    removeFromCart(product: Product){
        this.httpService.makeDeleteRequest("/cart/own/" + product.id).subscribe({
            complete: () => {
                this.getCartSubject();
            }
        });
    }

    getCartSubject(){
        this.getCartFromServer();
        this.setCart();
        return this.cart$;
    }
    
    clearCart(){
        this.cart = new Cart([]);
        this.setCart();
    }
}