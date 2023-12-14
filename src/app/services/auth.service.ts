import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials.model";
import { HttpService } from "./http.service";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    authSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private httpService: HttpService){}

    sendCredentials(credentials: Credentials){
        return this.httpService.makePostRequest('/auth', credentials)
    }

    loginUser(){
        this.authSubject$.next(true);
    }
    
    logoutUser(){
        this.authSubject$.next(false);
        localStorage.removeItem('token');
    }
}