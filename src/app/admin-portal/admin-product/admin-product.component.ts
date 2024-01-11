import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList(){
    this.productService.getProducts().subscribe({
      next: (products: Product[])=> {
        this.products = products;
      }
    })
  }

  navigateToAddProduct(){
    this.router.navigate(['product-add/']);
  }

  navigateToEditProduct(productId: string){
    this.router.navigate(['product-edit/' + productId]);
  }

  deleteProduct(productId: string){
    this.productService.deleteProduct(productId).subscribe({
      complete: () => {
        this.refreshProductList();
      }
    });
  }

}
