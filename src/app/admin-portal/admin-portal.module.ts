import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPortalComponent } from './admin-portal.component';
import { AdminProductAddComponent } from './admin-product/admin-product-add/admin-product-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminProductComponent,
    AdminPortalComponent,
    AdminProductAddComponent
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
