import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials.model";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    isLoggedIn: boolean = true;

    constructor(private httpService: HttpService){}

    loginUser(credentials: Credentials){
      return this.httpService.makePostRequest('/auth', credentials)
    }

    logoutUser(){
      this.isLoggedIn = false;
      localStorage.removeItem('token');
    }
}