import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Check if the user is authenticated (e.g., by checking a token in localStorage)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth_token');
    console.log("Token from localStorage:", token);
    return token ? true : false;
  }

  // You can add more authentication methods like login, logout, etc.
}
