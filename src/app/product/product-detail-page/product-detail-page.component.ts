import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail-page',
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

  addSingleProductToCart(requestedProduct: Product){
    if(requestedProduct == null) return
    this.cartService.addToCart(requestedProduct);
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }

}
