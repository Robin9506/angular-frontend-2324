import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() public cart: Cart | undefined;
  @Output() public totalPrice: EventEmitter<number> = new EventEmitter

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let currentPrice: number = 0;
    if(this.cart != null){
      for (let index = 0; index < this.cart?.products.length; index++) {
        currentPrice += this.cart.products[index].price;   
      }
    }
    this.totalPrice.emit(currentPrice);
  }

}
