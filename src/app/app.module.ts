import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpService } from './services/http.service';
import { ProductService } from './services/product.service';
import {ProductModule} from "./product/product.module";
import {CheckoutModule} from "./checkout/checkout.module";
import { RunningModule } from './running/running.module';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    ProductModule,
    CheckoutModule,
    RunningModule
  ],
  exports: [RunningModule],
  providers: [HttpService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
