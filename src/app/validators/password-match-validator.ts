import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PasswordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    console.log(password);
    console.log(confirmPassword);
  
    return password?.value === confirmPassword?.value ? null : {'confirm': true };
  };