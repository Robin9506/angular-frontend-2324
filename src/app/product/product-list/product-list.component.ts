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
  // products: Product[] = [
  //   new Product(1, "Animal Crossing", 49.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/smbw.jpg", 3, "Nintendo Gamecube"),
  //   new Product(2, "Mario Kart 8 Deluxe", 79.99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", "Nintendo", "../../../assets/smbw.jpg", 5, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2: A Life Without A Future", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch"),
  //   new Product(3, "Xenoblade Chronicles 2", 49.99, "De toekomst again!", "Monolith Soft", "../../../assets/smbw.jpg", 4, "Switch")
  // ]

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
        console.log(products);
        this.products = products;

      },
      complete: () =>{
        console.log(this.products);
        this.isRetrievingProducts = false;

      }
    });
  }

  goToSingleProduct(product: Product){
    console.log(product);
    this.router.navigate(["product/" + product.id]);
  }
}
