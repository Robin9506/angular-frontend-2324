import { Component, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';

import { PromoComponent } from './promo/promo.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  cart: Cart | undefined;
  cartObserver: Subscription = new Subscription();
  @ViewChild (PromoComponent) promo: PromoComponent | undefined;

  totalPrice: number = 0;
  discountPrice: number = 0;
  promoDiscount: number = 0;


  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getCartFromServer();
    this.cartObserver = this.cartService.cart$.subscribe(
      cart => {
        this.cart = cart;
        this.calculateTotalPrice();
      }
      
    );
  }

  calculateTotalPrice(){  
    let currentPrice = 0;
    if(this.cart != null){
      for (let index = 0; index < this.cart?.products.length; index++) {
        currentPrice += this.cart.products[index].price;   
      }

      this.totalPrice = currentPrice - this.discountPrice;
    }
  }

  giveDiscount(discount: number){
    this.promoDiscount = discount;
    this.calculateDiscount();
    this.calculateTotalPrice();
  }

  calculateDiscount(){
    this.discountPrice = 0;
    let totalPrice = this.totalPrice;

    if(this.promoDiscount > 0){
      this.discountPrice = totalPrice *= ((100 - this.promoDiscount)/100);
      console.log(this.discountPrice);
      return this.discountPrice;
    }
    return this.discountPrice = 0;  
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
    this.cartService.getCartFromServer();
    this.promo?.removeCode();
  }
}
