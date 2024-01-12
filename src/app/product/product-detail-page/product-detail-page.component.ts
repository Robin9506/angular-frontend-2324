import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {
  product: Product | undefined;
  productId: string = '';
  isLoggedIn: boolean = false;
  loginObserver: Subscription = new Subscription();

  isLoading: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loginObserver = this.authService.authSubject$.subscribe(
      loginState => {this.isLoggedIn = loginState;}
    );
    this.getSingleProduct();
  }

  getSingleProduct(){
    this.isLoading = true;
    this.productService.getSingleProduct(this.productId).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      complete: () => {
        this.isLoading = false;
      }    
    });
  }

  addSingleProductToCart(requestedProduct: Product){
    if(!this.isLoggedIn){
      this.router.navigate(['login'])
    }
    else{
      if(requestedProduct == null) return
      this.cartService.addToCart(requestedProduct);
    }
    
  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
  }

}
