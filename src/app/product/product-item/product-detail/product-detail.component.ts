import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() name: string | undefined = "";
  @Input() price: number | undefined = 0;
  @Input() platform: string | undefined = "";
  @Input() rating: number | undefined = 0;

  convertProductRatingToArray(): Array<number> {
    return Array(this.rating);
  }

}
