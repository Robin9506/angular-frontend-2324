import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {CheckoutPageComponent} from "./checkout-page.component";
import { PromoComponent } from './promo/promo.component';

@NgModule({
  declarations: [
    CheckoutPageComponent,
    CartComponent,
    PromoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
