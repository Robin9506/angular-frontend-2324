import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  cartItems: Cart[] = [];

  @Input()
  totalPrice: number = 0;
  discountPrice: number = 0;
  promoDiscount: number = 0;


  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.getCartItems();
    console.log(this.cartItems);
  }

  getCartItems(){
    this.cartService.getCartSubject().subscribe((cart: Cart[]) => {
      this.cartItems = cart;
    });
  }

  setTotalPrice(newPrice: number){
    this.totalPrice = newPrice;
  }



}
