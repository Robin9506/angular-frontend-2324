import { Component } from '@angular/core';
import { Account } from '../../models/account.model';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public account: Account | undefined;
  isAdmin: boolean = false;
  adminObserver: Subscription = new Subscription();

  constructor(private router: Router, private profileService: ProfileService, private accountService: AccountService, private authService: AuthService){}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (ownAccount: Account) => {
        this.account = ownAccount;
      }
  });
  
  this.adminObserver = this.authService.isAdminSubject$.subscribe(
    role => {this.isAdmin = role}
  );

  this.authService.isAdmin();    
  }

  navigateToEditAccount(){
    this.router.navigate(['edit-own-account']);
  }

  deleteAccount(){
    this.accountService.deleteAccount().subscribe({
      complete: () => {
        localStorage.removeItem('token');
        this.authService.logoutUser();
        this.router.navigate(['product']);
      }
    });
    
  }
}
