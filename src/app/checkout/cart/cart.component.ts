import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() public cart: Cart | undefined;
  @Output() public remove: EventEmitter<Product> = new EventEmitter

  ngOnInit(): void {
  }
  deleteFromCart(product: Product){
    this.remove.emit(product);
  }

}
