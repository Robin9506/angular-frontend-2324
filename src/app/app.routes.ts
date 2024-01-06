import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsPageComponent } from './product/products-page.component';
import { ProductDetailPageComponent } from './product/product-detail-page/product-detail-page.component';
import { CheckoutPageComponent } from './checkout/checkout-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { ProfileComponent } from './customer-portal/profile/profile.component';

export const routes: Routes = [
  { path: '', component: ProductsPageComponent},
  { path: 'home', component: ProductsPageComponent},
  { path: 'product', component: ProductsPageComponent},
  { path: 'product/:id', component: ProductDetailPageComponent},
  { path: 'checkout', component: CheckoutPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'customer-portal', component: CustomerPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: []
})
export class AppRoutingModule { }