import { Injectable } from "@angular/core";
import { Account } from "../models/account.model";
import { HttpService } from "./http.service";
import { Role } from "../enums/role";
import { AccountService } from "./account.service";


@Injectable({
    providedIn: 'root',
  })
export class ProfileService{
    constructor(private accountService: AccountService){}
    
    getProfile(){
        return this.accountService.getOwnAccount();
    }


}