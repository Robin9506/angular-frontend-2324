import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { ProductModule } from './product/product.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AppModule]
})
export class AppComponent {
  title = 'angular-webshop-2324';
}
