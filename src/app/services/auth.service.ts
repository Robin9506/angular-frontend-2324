import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials.model";
import { HttpService } from "./http.service";
import { BehaviorSubject, Subject } from "rxjs";
import { AccountService } from "./account.service";
import { Account } from "../models/account.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";
import { Role } from "../enums/role";

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    authSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
    isAdminSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private httpService: HttpService, 
        private accountService: AccountService, 
        private jwtHelper: JwtHelperService,
        private router: Router){}

    sendCredentials(credentials: Credentials){
        return this.httpService.makePostRequest('/auth', credentials)
    }

    isAdmin(){
        this.accountService.getOwnAccount().subscribe({
            next: (requestedAccount: Account) => {
                if (requestedAccount.role === Role.ADMIN){
                    this.isAdminSubject$.next(true);
                }
                else{
                    this.isAdminSubject$.next(false);
                }
            }
        });
    }

    isLoggedInAccountValid(){
        const token = localStorage.getItem('token');
        if(this.jwtHelper.isTokenExpired(token)){
            this.logoutUser();
            this.router.navigate(['home']);
            return;}

        this.accountService.getOwnAccount().subscribe({
            next: (requestedAccount: Account) => {
                if (requestedAccount != null){
                    this.loginUser();
                }
                else{
                    this.logoutUser();
                }        
            },
            error: () =>{
                this.logoutUser();
            }
        })
    }

    loginUser(){
        this.authSubject$.next(true);
    }
    
    logoutUser(){
        this.authSubject$.next(false);
        localStorage.removeItem('token');
    }
}