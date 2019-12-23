import { localEnvironment } from './environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OverlayService } from './overlay.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  nameChange: Subject<string> = new Subject<string>();

  constructor(private httpClient: HttpClient, private router: Router, private overlayService: OverlayService) { }

  login(login: string, password: string): void {
    const body = { login, password };
    this.overlayService.showSpinner();
    this.httpClient.post(`${localEnvironment}/auth/login`, body)
      .pipe(delay(2000))
      .subscribe(
        (tokenObj) => {
          localStorage.setItem('token', tokenObj['token']);
          this.token = tokenObj['token'];
          this.nameChange.next(this.token);
          this.router.navigate(['/courses']);
          this.overlayService.hideSpinner();
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
    return this.httpClient.post(`${localEnvironment}/auth/userinfo`, tokenObj);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
