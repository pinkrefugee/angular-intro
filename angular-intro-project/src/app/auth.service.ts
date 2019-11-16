import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentEmail: string = '';
  nameChange: Subject<string> = new Subject<string>();
  constructor() { }

  login(email: string, pass: string): void {
    const user = {
      pass,
      token: '123abc'
    };
    const serialUser = JSON.stringify(user);
    localStorage.setItem(email, serialUser);
    this.currentEmail = email;
    this.nameChange.next(this.currentEmail);
    console.log('Logged in');
  }

  logoff(): void {
    localStorage.removeItem(this.currentEmail);
    this.currentEmail = '';
    this.nameChange.next(this.currentEmail);
    console.log('Logged out');
  }

  getUserInfo(): string {
    return this.currentEmail;
  }

  isAuthenticated(): boolean {
    return !!this.currentEmail;
  }
}
