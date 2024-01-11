import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrl: './admin-product-edit.component.scss'
})
export class AdminProductEditComponent{
  product: Product | undefined;
  id: string = "";

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCompany: string = '';
  productImageLink: string = '';
  productRating: number = 0;
  productPlatform: string = '';

  isRetrievingProduct: boolean = false;



  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSingleProduct();

  }

  getSingleProduct(){
    this.isRetrievingProduct = true;
    this.productService.getSingleProduct(this.id).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      complete: () => {
        this.setProductVariables();
        this.isRetrievingProduct = false;
      } 
      
    });
    
  }

  setProductVariables(){
    if(this.product != null){
      this.productName = this.product.name;
      this.productPrice = this.product.price;
      this.productDescription = this.product.description;
      this.productCompany = this.product.company;
      this.productImageLink = this.product.imageLink;
      this.productRating = this.product.rating;
      this.productPlatform = this.product.platform;
    }
  }

  areRequiredFieldsFilled(): boolean{
    if(this.productName && 
      this.productPrice > 0 && 
      this.productCompany && 
      this.productImageLink &&
      this.productDescription.length < 256 && 
      this.productRating > 0 &&
      this.productRating < 6 &&
      this.productPlatform){
        return true;
      }
      else return false;
  }

  editProduct(id: string){
    const editedProduct: Product = new Product(
      this.id,
      this.productName,
      this.productPrice,
      this.productDescription,
      this.productCompany,
      this.productImageLink,
      this.productRating,
      this.productPlatform
    );

    if(this.areRequiredFieldsFilled()){
      this.productService.editProduct(editedProduct, id).subscribe();
      this.router.navigate(['admin-portal']);
    }

  }

  getProductRating(rating: number): Array<number> {
    return Array(rating);
  }

  getNonRating(rating: number): Array<number> {
    return Array(5 - rating);
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
