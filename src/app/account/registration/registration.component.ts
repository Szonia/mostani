import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Jelszavak ellenőrzése
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value ? { mismatch: true } : null;
  }

  // Regisztráció
  register() {
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.value;
      this.auth.register(email, password).then(res => {
        if (res.success) {
          alert(res.message);  // Sikeres regisztráció esetén
        }
      }).catch(err => {
        console.error("Hiba történt!", err);
      });
    }
  }
}
