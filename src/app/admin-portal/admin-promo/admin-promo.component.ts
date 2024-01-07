import { Component } from '@angular/core';
import { Promo } from '../../models/promo.model';
import { PromoService } from '../../services/promo.service';

@Component({
  selector: 'app-admin-promo',
  templateUrl: './admin-promo.component.html',
  styleUrl: './admin-promo.component.scss'
})
export class AdminPromoComponent {
  promos: Promo[] = [];

  constructor(private promoService: PromoService){}

  ngOnInit(): void {
    this.refreshPromos();
  }

  refreshPromos(){
    this.promoService.getPromos().subscribe({
      next: (promos: Promo[]) => {
        this.promos = promos;
      }
    })
  }

    deletePromo(id: string){
      this.promoService.deletePromo(id).subscribe({
        complete: () => {
          this.refreshPromos();
        }
      });
    }
  }




