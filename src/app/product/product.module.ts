import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-item/product-detail/product-detail.component';
import { ProductThumbnailComponent } from './product-item/product-thumbnail/product-thumbnail.component';




@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductThumbnailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductThumbnailComponent
  ]
})
export class ProductModule { }