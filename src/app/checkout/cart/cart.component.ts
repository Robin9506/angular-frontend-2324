import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() public cart: Cart[] = [];
  @Output() public totalPrice: EventEmitter<number> = new EventEmitter

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let currentPrice: number = 0;
    for (let index = 0; index < this.cart.length; index++) {
      currentPrice += this.cart[index].product.price;   
    }

    this.totalPrice.emit(currentPrice);
  }

}
