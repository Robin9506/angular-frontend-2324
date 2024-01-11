import { Component, EventEmitter, Output } from '@angular/core';
import { PromoService } from '../../services/promo.service';
import { delay } from 'rxjs';

@Component({
  selector: 'promo-code',
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss'
})
export class PromoComponent {
  @Output() code = new EventEmitter<number>();
  currentPromoCode: string = "";
  currentDiscount: number = 0;
  hasDiscount: boolean = false;
  hasEnteredCode: boolean = false;

  constructor(private promoService: PromoService) {

   }

  ngOnInit(): void {
  }

  enterCode(promoCode: string){    
    if(promoCode === "") {
      return;
    }

    this.hasEnteredCode = true;

    this.promoService.postPromoCodeForDiscount(promoCode).pipe(delay(750)).subscribe({
      next: (promoDiscount: number) =>{
          this.currentDiscount = promoDiscount;
      },
      error: (e: Error) => {
          this.currentDiscount = 0;
          console.log("No Promo")
      },
      complete: () => {
          this.setCode(promoCode);
          this.hasEnteredCode = false;
      }
  });;    
  }

  setCode(promoCode: string){
    if(this.currentDiscount > 0){
      this.currentPromoCode = promoCode;
      this.hasDiscount = true;
      this.code.emit(this.currentDiscount);
    }
    else{
      this.hasDiscount = false;
    }
  }

  removeCode(){
    this.currentPromoCode = "";
    this.currentDiscount = 0;
    this.hasDiscount = false;
    this.code.emit(this.currentDiscount);
  }

}

