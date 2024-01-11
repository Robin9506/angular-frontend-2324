import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  cart: Cart | undefined;

  @Input()
  totalPrice: number = 0;
  discountPrice: number = 0;
  promoDiscount: number = 0;


  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.getCartItems();
    this.getCart();
  }

  getCartItems(){
    this.cartService.getCartFromServer();
  }

  getCart(){
    this.cart = this.cartService.cart;
  }

  setTotalPrice(newPrice: number){
    this.totalPrice = newPrice;
  }



}
