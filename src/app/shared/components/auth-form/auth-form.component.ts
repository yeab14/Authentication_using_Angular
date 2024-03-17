// src/app/shared/components/auth-form/auth-form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}

  login(): void {
    // Implement login logic here
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Reset form fields
    this.username = '';
    this.password = '';
  }

  signup(): void {
    // Implement signup logic here
    console.log('Signup clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // Reset form fields
    this.username = '';
    this.password = '';
  }
}

