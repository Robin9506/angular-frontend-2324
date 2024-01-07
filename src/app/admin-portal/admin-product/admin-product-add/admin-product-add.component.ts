import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { environment } from "../../../../environments/environment.prod";

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrl: './admin-product-add.component.scss'
})
export class AdminProductAddComponent {
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';

  id: string = "";

  constructor(private router: Router, private productService: ProductService) { }

  addProduct(){
    const newProduct: Product = new Product(
      this.id,
      this.productName,
      this.productPrice,
      this.productDescription,
      this.productCompany,
      this.productImageLink,
      this.productRating,
      this.productPlatform
    );

    this.productService.addProduct(newProduct);
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if(reader.result != null){
        const imageBase64 = reader.result.toString().split(",").pop();
        if(imageBase64 != null){
          this.productImageLink = imageBase64;
        }
      }else{
      this.productImageLink = "";
      }
    };
}


}
