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
    

    // getAccounts(){
    //     return this.accounts;
    // }
    getAccounts(){
        return this.httpService.makeGetRequest('/account');
    }

    getAccountById(id: string){
        return this.httpService.makeGetRequest('/account/' + id)
    }

    deleteAccount(id: string){
        return this.httpService.makeDeleteRequest('/account/' + id);
    }

    editAccount(account: Account, id: string){
        return this.httpService.makePutRequest("/account/" + id , account);
      }
}