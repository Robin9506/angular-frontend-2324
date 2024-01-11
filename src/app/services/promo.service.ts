import { Injectable } from "@angular/core";
import { Account } from "../models/account.model";
import { HttpService } from "./http.service";
import { Role } from "../enums/role";
import { AccountService } from "./account.service";
import { Promo } from "../models/promo.model";


@Injectable({
    providedIn: 'root',
  })
export class PromoService{
    constructor(private httpService: HttpService){}
    

    createPromo(promo: Promo){
        return this.httpService.makePostRequest("/promo/new", promo);
    }

    getPromos(){
        return this.httpService.makeGetRequest("/promo");
    }

    getPromoById(id: string){
        return this.httpService.makeGetRequest("/promo/" + id);
    }

    deletePromo(id: string){
        return this.httpService.makeDeleteRequest('/promo/' + id)
    }

    updatePromo(id:string, promo: Promo){
        return this.httpService.makePutRequest("/promo/" + id, promo);
    }

    postPromoCodeForDiscount(promoCode: string){
        const promo: Promo = new Promo("default-id", promoCode, 0);
        return this.httpService.makePostRequest("/promo", promo)
    }

    


}