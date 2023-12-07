import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
}
