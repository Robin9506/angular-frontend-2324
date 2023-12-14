import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  amountInCart: number = 0;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.amountInCart = this.cartService.getCurrentAmountInCart();
    this.cartService.getCartSubject().subscribe({
      next: (cartItems: Cart[]) => {
        this.amountInCart = cartItems.length;
      },
      complete: ()=>{
      }
    })
  }

  goToHomePage(){this.router.navigate(['home']);}
  goToProductPage(){this.router.navigate(['product']);}
  goToLoginPage(){this.router.navigate(['login']);}
  navigateToCheckout(){this.router.navigate(['checkout']);}
}
