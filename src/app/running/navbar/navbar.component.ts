import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  amountInCart: number = 0;
  isLoggedIn: boolean = false;
  loginObserver: Subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.amountInCart = this.cartService.getCurrentAmountInCart();
    this.cartService.getCartSubject().subscribe({
      next: (cartItems: Cart[]) => {
        this.amountInCart = cartItems.length;
      }
    });
    this.loginObserver = this.authService.authSubject$.subscribe(
      loginState => {this.isLoggedIn = loginState;}
    );
  }

  goToHomePage(){this.router.navigate(['home']);}
  goToProductPage(){this.router.navigate(['product']);}
  goToLoginPage(){this.router.navigate(['login']);}
  logout(){this.authService.logoutUser();}
  navigateToCheckout(){this.router.navigate(['checkout']);}
}
