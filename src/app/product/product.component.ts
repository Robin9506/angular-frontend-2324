import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Product } from '../models/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
}
