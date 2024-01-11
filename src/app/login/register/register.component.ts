import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { PasswordStrengthValidator } from '../../validators/password-strength-validator.component';
import { PasswordMatchingValidator } from '../../validators/password-match-validator';
import { Account } from '../../models/account.model';
import { Role } from '../../enums/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup | any;
  registrationFailed: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private accountService: AccountService){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }, {validators: PasswordMatchingValidator})
  }

  register(){
    const account: Account =
     new Account(
      "",
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
      Role.USER,
      this.registerForm.controls['address'].value,
      this.registerForm.controls['city'].value,
      this.registerForm.controls['country'].value,

     )
    this.accountService.createAccount(account).subscribe({
      complete: () => {
        this.router.navigate(['login']);
      } 
    });
  }

}
