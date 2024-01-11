import { Injectable } from "@angular/core";
import { Account } from "../models/account.model";
import { HttpService } from "./http.service";
import { Role } from "../enums/role";


@Injectable({
    providedIn: 'root',
  })
export class AccountService{
    private accounts = [
        new Account("", "rob", "123", Role.ADMIN, "jan de straat 8", "leiden", "Nederland")
    ]

    constructor(private httpService: HttpService){}
    
    getAccounts(){
        return this.httpService.makeGetRequest('/account');
    }

    getOwnAccount(){
        return this.httpService.makeGetRequest('/account/own');
    }

    updateOwnAccount(account: Account){
        return this.httpService.makePutRequest('/account/own', account);
    }

    createAccount(account: Account){
        return this.httpService.makePostRequest('/account', account);
    }

    deleteAccount(){
        return this.httpService.makeDeleteRequest('/account/own');
    }

    editAccount(account: Account, id: string){
        return this.httpService.makePutRequest("/account/" + id , account);
      }
}