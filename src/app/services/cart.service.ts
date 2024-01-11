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
    private cart$: Subject<Cart> = new BehaviorSubject<Cart>(new Cart([]));

    constructor(private httpService: HttpService){}

    getCartFromServer(){
        this.httpService.makeGetRequest("/cart/own").subscribe({
            next: (cart: Cart) => {
                this.cart = cart;
            },
            complete: () => {
                console.log(this.cart);
            }
        })
    }

    setCart(){
        if(this.cart != null){
            this.cart$.next(this.cart);
        }
    }

    addToCart(product: Product){}

    getCartSubject(){
        this.getCartFromServer();
        this.setCart();
        return this.cart$;
    }

    getCurrentAmountInCart(){
        this.getCartSubject();
        return this.cart?.products.length;
    }

    clearCart(){
        localStorage.removeItem('cartItems');
        this.setCart();
    }
}