import { Component } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../models/account.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from '../../../validators/password-strength-validator.component';
import { PasswordMatchingValidator } from '../../../validators/password-match-validator';
import { Role } from '../../../enums/role';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {
  profileForm: FormGroup | any;
  updateFailed: boolean = false;
  
  account: Account | undefined
  email: string = '';
  address: string = '';
  city: string = '';
  country: string = '';

  constructor(private formBuilder: FormBuilder,private profileService: ProfileService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.profileService.getProfile().subscribe({
      next: (account: Account) => {
        this.account = account;
      },
      complete: () => {
        if(this.account != null){
          this.email = this.account.username;
          this.address = this.account.address;
          this.city = this.account.city;
          this.country = this.account.country;
        }
      }
    })

    this.profileForm = this.formBuilder.group({
      email: [this.email],
      password: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      country: [this.country, Validators.required],
    }, {validators: PasswordMatchingValidator})

    
  }

  editProfile(){
    const account: Account = new Account(
      "", 
      this.email, 
      this.profileForm.controls['password'].value, 
      Role.USER , 
      this.profileForm.controls['address'].value, 
      this.profileForm.controls['city'].value, 
      this.profileForm.controls['country'].value)
      
      this.profileService.editProfile(account).subscribe();

      this.router.navigate(['product']);

  }

}
