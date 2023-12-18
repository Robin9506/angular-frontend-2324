import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-customer-portal',
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.scss'
})
export class CustomerPortalComponent {
  public account: Account | undefined;

  constructor(){}
  
}
