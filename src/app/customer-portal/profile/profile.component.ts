import { Component } from '@angular/core';
import { Account } from '../../models/account.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public account: Account | undefined;

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (ownAccount: Account) => {
        this.account = ownAccount;

      }
  });
}
}
