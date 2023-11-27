import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductDetailComponent } from '../product-item/product-detail/product-detail.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    new Product(1, "Animal Crossing", 49.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/smbw.jpg", 3, "Switch"),
    new Product(2, "Mario Kart 8 Deluxe", 79.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/smbw.jpg", 5, "Switch"),
    new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
    new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
    new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  ]
}
