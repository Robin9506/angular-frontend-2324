import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
    providedIn: 'root',
  })
export class CartService{
    private cart: Cart[] = [];
    private localStorageCart: Cart[] = [];
    private cart$: Subject<Cart[]> = new BehaviorSubject<Cart[]>([]);

    getLocalStorageItems(){
        this.localStorageCart = [];
        const local = localStorage.getItem('cartItems') as string;

        if(local !== null){
            let productJSON = JSON.parse(local);
            for (let index = 0; index < productJSON.length; index++) {
                
                let itemDescription: Product = productJSON[index]['_product'];
                let product: Product = 
                new Product(
                    itemDescription['_id'],
                    itemDescription['_name'],
                    itemDescription['_price'],
                    itemDescription['_description'],
                    itemDescription['_company'],
                    itemDescription['_imageLink'],
                    itemDescription['_rating'],
                    itemDescription['_platform']);

                const cartItem = new Cart(product);
                
                this.localStorageCart.push(cartItem);
                               
            }
        }
    }

    setCart(){
        this.cart = this.localStorageCart;
        this.cart$.next(this.cart.slice());

        console.log(this.cart);
    }

    addToCart(product: Product){
        let productObject: Product = new Product(
            product.id, 
            product.name, 
            product.price, 
            product.description, 
            product.company, 
            product.imageLink,
            product.rating, 
            product.platform,
      );
        const cartItem: Cart = new Cart(productObject);
        this.localStorageCart.push(cartItem);
        this.setCart();
        
        localStorage.setItem('cartItems', JSON.stringify(this.localStorageCart));
    }

    removeFromCart(id: number){
        this.localStorageCart.splice(id, 1);

        localStorage.setItem('cartItems', JSON.stringify(this.localStorageCart));
        
        this.setCart();
    }

    getCartSubject(){
        this.getLocalStorageItems();
        this.setCart();
        return this.cart$;
    }

    getCurrentAmountInCart(){
        this.getCartSubject();
        return this.cart.length;
    }

    clearCart(){
        localStorage.removeItem('cartItems');
        this.setCart();
    }
}