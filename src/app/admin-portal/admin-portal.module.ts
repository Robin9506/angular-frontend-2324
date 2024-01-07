import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminProductAddComponent } from './admin-product/admin-product-add/admin-product-add.component';
import { FormsModule } from '@angular/forms';
import { AdminPromoComponent } from './admin-promo/admin-promo.component';
import { AdminProductEditComponent } from './admin-product/admin-product-edit/admin-product-edit.component';

@NgModule({
  declarations: [
    AdminProductComponent,
    AdminPortalComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    AdminPromoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    RouterModule
  ]
})
export class AdminPortalModule { }
