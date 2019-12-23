import { localEnvironment } from './environment';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OverlayService } from './overlay.service';
import { delay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { authLogin, authLogout} from './login.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';
  nameChange: Subject<string> = new Subject<string>();

  constructor(private httpClient: HttpClient, private router: Router, private overlayService: OverlayService, private store: Store<{ login: string }>) {
    store.pipe(select('login')).subscribe(val => {
      this.token = val;
    });
   }

  login(login: string, password: string): void {

    const body = { login, password };
    this.overlayService.showSpinner();
    this.httpClient.post(`${localEnvironment}/auth/login`, body)
      .pipe(delay(2000))
      .subscribe(
        (tokenObj) => {
          localStorage.setItem('token', tokenObj['token']);
          this.store.dispatch(authLogin({ tokenObject: tokenObj }));
          this.nameChange.next(this.token);
          this.router.navigate(['/courses']);
          this.overlayService.hideSpinner();
        },
        error => console.log(error)
      );
  }

  logoff(): void {
    localStorage.removeItem('token');
    this.store.dispatch(authLogout());
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
