import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {
  product: Product | undefined;
  productId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSingleProduct();
  }

  getSingleProduct(){
    this.productService.getSingleProduct(this.productId).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      complete: () => {
      }    
    });
  }

  addSingleProductToCart(){
    if(this.product == null) return
    this.cartService.addToCart(this.product);
  }
}