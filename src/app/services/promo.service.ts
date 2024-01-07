import { Injectable } from "@angular/core";
import { Account } from "../models/account.model";
import { HttpService } from "./http.service";
import { Role } from "../enums/role";
import { AccountService } from "./account.service";


@Injectable({
    providedIn: 'root',
  })
export class PromoService{
    constructor(private httpService: HttpService){}
    
    getPromos(){
        return this.httpService.makeGetRequest("/promo");
    }

    deletePromo(id: string){
        return this.httpService.makeDeleteRequest('/promo/' + id)
    }


}