import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-detail',
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
