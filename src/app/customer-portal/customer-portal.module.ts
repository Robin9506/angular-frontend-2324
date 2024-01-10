import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    CustomerPortalComponent,
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    RouterModule
  ]
})
export class CustomerPortalModule { }
