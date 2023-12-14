import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {CheckoutPageComponent} from "./checkout-page.component";

@NgModule({
  declarations: [
    CheckoutPageComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
