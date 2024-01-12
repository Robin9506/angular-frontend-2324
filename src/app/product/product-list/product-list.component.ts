import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] =[];
  isRetrievingProducts: boolean = false;

  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){  
    this.isRetrievingProducts = true;
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;

      },
      complete: () =>{
        this.isRetrievingProducts = false;
      }
    });
  }

  getProductsOrderByName(){
    this.isRetrievingProducts = true;
    this.productService.getOrderedProductsByName().subscribe({
      next: (products: Product[]) => {
        this.isRetrievingProducts = true;
        this.products = products;

      },
      complete: () =>{
        this.isRetrievingProducts = false;

      }
    });
  }

  getProductsOrderByPrice(){
    this.isRetrievingProducts = true;
    this.productService.getOrderedProductsByPrice().subscribe({
      next: (products: Product[]) => {
        this.isRetrievingProducts = true;
        this.products = products;

      },
      complete: () =>{
        this.isRetrievingProducts = false;

      }
    });
  }

  goToSingleProduct(product: Product){
    this.router.navigate(["product/" + product.id]);
  }
}
