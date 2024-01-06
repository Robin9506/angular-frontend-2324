import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CustomerPortalComponent,
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    RouterModule
  ]
})
export class CustomerPortalModule { }
