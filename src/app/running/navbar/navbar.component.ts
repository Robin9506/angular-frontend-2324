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
  isAdmin: boolean = false;
  loginObserver: Subscription = new Subscription();
  adminObserver: Subscription = new Subscription();

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedInAccountValid();
    this.authService.isAdmin();
    this.amountInCart = this.cartService.getCurrentAmountInCart();
    this.cartService.getCartSubject().subscribe({
      next: (cartItems: Cart[]) => {
        this.amountInCart = cartItems.length;
      }
    });
    this.loginObserver = this.authService.authSubject$.subscribe(
      loginState => {this.isLoggedIn = loginState;}
    );

    this.adminObserver = this.authService.isAdminSubject$.subscribe(
      role => {this.isAdmin = role}
    )       
  }

  goToHomePage(){this.router.navigate(['home']);}
  goToProductPage(){this.router.navigate(['product']);}
  goToLoginPage(){this.router.navigate(['login']);}
  goToCustomerProfile(){this.router.navigate(['customer-portal']);}
  goToAdmin(){this.router.navigate(['admin-portal']);}
  logout(){this.authService.logoutUser(); this.router.navigate(['home']);}
  navigateToCheckout(){this.router.navigate(['checkout']);}
}
