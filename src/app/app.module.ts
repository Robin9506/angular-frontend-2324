import { NgModule, forwardRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpService } from './services/http.service';
import { ProductService } from './services/product.service';
import {ProductModule} from "./product/product.module";
import {CheckoutModule} from "./checkout/checkout.module";
import { RunningModule } from './running/running.module';
import { AuthService } from './services/auth.service';
import { AuthModule } from './login/auth.module';
import { RouterModule } from '@angular/router';
import { CustomerPortalModule } from './customer-portal/customer-portal.module';
import { AccountService } from './services/account.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ProfileService } from './services/profile.service';
import { OrderService } from './services/order.service';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { PromoService } from './services/promo.service';
import { CartService } from './services/cart.service';

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
    RunningModule,
    AuthModule,
    AdminPortalModule,
    CustomerPortalModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080'],
      },
    })    
  ],
  exports: [RunningModule, RouterModule],
  providers: [HttpService, ProductService, CartService , AuthService, AccountService, ProfileService, OrderService, PromoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
