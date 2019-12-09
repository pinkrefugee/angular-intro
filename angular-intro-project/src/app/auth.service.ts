import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  nameChange: Subject<string> = new Subject<string>();
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(login: string, password: string): void {
    const body = { login, password };
    this.httpClient.post('http://localhost:3004/auth/login', body)
      .subscribe(
        (tokenObj) => {
          localStorage.setItem('token', tokenObj['token']);
          this.token = tokenObj['token'];
          this.nameChange.next(this.token);
          this.router.navigate(['/courses']);
        },
        error => console.log(error)
      );
  }

  logoff(): void {
    localStorage.removeItem('token');
    this.token = '';
    this.nameChange.next(this.token);
    console.log('Logged out');
  }

  getUserInfo() {
    const tokenObj = { 'token': localStorage.getItem('token') };
    return this.httpClient.post('http://localhost:3004/auth/userinfo', tokenObj);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
