import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-item/product-detail/product-detail.component';
import { ProductThumbnailComponent } from './product-item/product-thumbnail/product-thumbnail.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { BuyBoxComponent } from '../buy-box/buy-box.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductThumbnailComponent,
    ProductDetailPageComponent
        
  ],
  imports: [
    CommonModule,
    BreadcrumbsComponent,
    BuyBoxComponent
  ],
  exports: [
    ProductsPageComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductThumbnailComponent,
    ProductDetailPageComponent
  ]
})
export class ProductModule { }