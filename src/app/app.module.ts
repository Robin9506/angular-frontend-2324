import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { ProductService } from './services/product.service';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,

    NavbarComponent,
    ProductModule

  ],
  exports: [ProductModule],

  providers: [HttpService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }