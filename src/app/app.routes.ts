import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailPageComponent } from './product/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  { path: '', component: ProductComponent},
  { path: 'home', component: ProductComponent},
  { path: 'product', component: ProductComponent},
  { path: 'product/:id', component: ProductDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }