import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AppModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-webshop-2324';
}
