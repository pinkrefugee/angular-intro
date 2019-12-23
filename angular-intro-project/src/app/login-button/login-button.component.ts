import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  isLogged: boolean = this.authService.isAuthenticated();
  userName: Observable<string>;
  nameChanged: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getUserInfo().pipe(map((user) => {
      return user['name']['first'];
    }));
    this.nameChanged = this.authService.nameChange.subscribe(() => {
      this.isLogged = this.authService.isAuthenticated();
      this.userName = this.authService.getUserInfo().pipe(map((user) => {
        return user['name']['first'];
      }));
    });
  }

  ngOnDestroy() {
    this.nameChanged.unsubscribe();
  }

}
