import { Component } from '@angular/core';
import { Promo } from '../../models/promo.model';
import { PromoService } from '../../services/promo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-promo',
  templateUrl: './admin-promo.component.html',
  styleUrl: './admin-promo.component.scss'
})
export class AdminPromoComponent {
  promos: Promo[] = [];

  constructor(private router: Router, private promoService: PromoService){}

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

  navigateToAddPromo(){
    this.router.navigate(['promo-add']);
  }

  navigateToEditPromo(id: string){
    this.router.navigate(['promo-edit/' + id]);
  }

    deletePromo(id: string){
      this.promoService.deletePromo(id).subscribe({
        complete: () => {
          this.refreshPromos();
        }
      });
    }
  }




