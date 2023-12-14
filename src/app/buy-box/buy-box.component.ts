import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'buy-box',
  standalone: true,
  imports: [],
  templateUrl: './buy-box.component.html',
  styleUrl: './buy-box.component.scss'
})
export class BuyBoxComponent {
  @Input() public product: Product | undefined;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  requestProductToCart(){
    this.addToCart.emit(this.product);
  }
}
