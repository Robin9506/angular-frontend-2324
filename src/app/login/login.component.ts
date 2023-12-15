import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials.model';
import { delay } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private username: string = "";
  private password: string = "";


  constructor(private router: Router, private location: Location ,private authService: AuthService) { }

  login(ngForm: NgForm){
    this.username = ngForm.value.username;
    this.password = ngForm.value.password;

    const credentials: Credentials = new Credentials(this.username, this.password)

    this.authService.sendCredentials(credentials).pipe(delay(750))
    .subscribe({
      next: (token) => {
        if(token !== null){
          localStorage.setItem('token', token.tokenValue);
          this.authService.loginUser();
          this.location.back();
        }
      }
    });
  }

  navigateToRegister(){
    this.router.navigate(["register"]);
  }

}
