import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { CustomerPortalComponent } from './customer-portal.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CustomerPortalComponent
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
