import { Component } from '@angular/core';
import { PromoService } from '../../../services/promo.service';
import { Promo } from '../../../models/promo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-promo-add',
  templateUrl: './admin-promo-add.component.html',
  styleUrl: './admin-promo-add.component.scss'
})
export class AdminPromoAddComponent {
  code: string = "";
  discount: number = 0;
  failedToCreate: boolean = false;

constructor(private router: Router, private promoService: PromoService){}

  addPromo(){
    if(this.code == "" && this.discount < 1){ return;}

    const promo: Promo = new Promo("",this.code, this.discount);
    this.promoService.createPromo(promo).subscribe({
      next: (promo: Promo) => {
          if (promo == null){
            this.failedToCreate = true;
          } 
          else{
            this.router.navigate(['admin-portal']);
            this.failedToCreate = false;
            
          }
      }
    })
  }
}
