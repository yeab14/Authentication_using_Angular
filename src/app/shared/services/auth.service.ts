// src/app/shared/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(username: string, password: string): Observable<User> {
    // Implement login logic here
    // For example, you might make an HTTP request to your server to authenticate the user
    // This is just a placeholder implementation returning a mock user
    const user: User = {
      id: 1,
      username: 'exampleUser',
      email: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
      avatarUrl: 'https://example.com/avatar.jpg'
      // Add more properties as needed
    };
    return of(user);
  }

  signup(username: string, email: string, password: string): Observable<User> {
    // Implement signup logic here
    // For example, you might make an HTTP request to your server to register the user
    // This is just a placeholder implementation returning a mock user
    const user: User = {
      id: 1,
      username: username,
      email: email,
      firstName: 'New',
      lastName: 'User',
      // Add more properties as needed
    };
    return of(user);
  }

  // Other authentication-related methods (logout, etc.) can be added here
}
