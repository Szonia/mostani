import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, this.emailValidator]],  
      password: ['', [Validators.required, Validators.minLength(5)]],  
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  
  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  emailValidator(control: any): { [key: string]: boolean } | null {
    const email = control.value;
    if (email && email.includes('@') && email.includes('.')) {
      return null;
    }
    return { 'invalidEmail': true };  
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      localStorage.setItem('userEmail', formValue.email);
      localStorage.setItem('userPassword', formValue.password); 
      alert('Regisztráció sikeres!');
      this.router.navigate(['/login']);
    }
  }
}

