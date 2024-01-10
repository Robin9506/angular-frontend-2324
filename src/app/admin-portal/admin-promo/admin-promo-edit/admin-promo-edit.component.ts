import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromoService } from '../../../services/promo.service';
import { Promo } from '../../../models/promo.model';

@Component({
  selector: 'app-admin-promo-edit',
  templateUrl: './admin-promo-edit.component.html',
  styleUrl: './admin-promo-edit.component.scss'
})
export class AdminPromoEditComponent {
  promo: Promo | undefined;
  code: string = "";
  discount: number = 0;

  id: string = ""

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private promoService: PromoService){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSinglePromo();

  }

  getSinglePromo(){
    this.promoService.getPromoById(this.id).subscribe({
      next: (promo: Promo) => {
        this.promo = promo;
      },
      complete: () => {
        if(this.promo != null){
          this.code = this.promo.code;
          this.discount = this.promo.discount;
        }

      } 
    })
  } 
  
  editPromo(){
    if(this.code != "" && this.discount > 0){
      this.promoService.updatePromo(this.id, new Promo("" ,this.code, this.discount)).subscribe();
      this.router.navigate(['admin-portal']);
    }
  }
}
