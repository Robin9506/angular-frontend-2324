import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  loginForm: FormGroup | any;
  loginFailed: boolean = false;


  constructor(private formBuilder: FormBuilder,private router: Router, private location: Location, private authService: AuthService) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  login(){

    const credentials: Credentials = 
    new Credentials(
      this.loginForm.controls['email'].value, 
      this.loginForm.controls['password'].value)

    this.authService.sendCredentials(credentials).pipe(delay(750))
    .subscribe({
      next: (token) => {
        if(token !== null){
          this.loginFailed = false;
          localStorage.setItem('token', token.tokenValue);
          this.authService.loginUser();
          this.authService.isAdmin();
          this.location.back();
          
        }
        else{
          this.loginFailed = true;
        }
      }
    });
  }

  navigateToRegister(){
    this.router.navigate(["register"]);
  }

}
