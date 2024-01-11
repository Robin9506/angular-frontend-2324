import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AppModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-webshop-2324';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
}
