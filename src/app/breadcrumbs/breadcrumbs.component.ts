import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'breadcrumbs-component',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input()
  public endLocation: string | undefined = "";

  constructor(private router: Router){}

  goToHomePage(){this.router.navigate(['home']);}
  goToProductPage(){this.router.navigate(['product']);}
}
