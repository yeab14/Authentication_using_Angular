// src/app/features/auth/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password)
        .subscribe(
          () => {
            // Navigate to the desired route upon successful login
          },
          (error) => {
            this.error = error.message;
          }
        );
    } else {
      this.error = 'Please provide username and password.';
    }
  }
}
