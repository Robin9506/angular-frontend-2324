import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductsPageComponent } from './product/products-page.component';
import { ProductDetailPageComponent } from './product/product-detail-page/product-detail-page.component';
import { CheckoutPageComponent } from './checkout/checkout-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminProductAddComponent } from './admin-portal/admin-product/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-portal/admin-product/admin-product-edit/admin-product-edit.component';
import { AdminPromoAddComponent } from './admin-portal/admin-promo/admin-promo-add/admin-promo-add.component';
import { AdminPromoEditComponent } from './admin-portal/admin-promo/admin-promo-edit/admin-promo-edit.component';

export const routes: Routes = [
  { path: '', component: ProductsPageComponent},
  { path: 'home', component: ProductsPageComponent},
  { path: 'product', component: ProductsPageComponent},
  { path: 'product/:id', component: ProductDetailPageComponent},
  { path: 'checkout', component: CheckoutPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'customer-portal', component: CustomerPortalComponent},
  { path: 'admin-portal', component: AdminPortalComponent, canActivate: []},
  { path: 'product-add', component: AdminProductAddComponent, canActivate: []},
  { path: 'product-edit/:id', component: AdminProductEditComponent, canActivate: []},
  { path: 'promo-add', component: AdminPromoAddComponent, canActivate: []},
  { path: 'promo-edit/:id', component: AdminPromoEditComponent, canActivate: []},

];

@NgModule({
  imports: 
  [],
  exports: [],
  providers: []
})
export class AppRoutingModule { }