import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AppModule, NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'angular-webshop-2324';
}
