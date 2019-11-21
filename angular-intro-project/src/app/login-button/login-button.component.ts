import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  isLogged: boolean = this.authService.isAuthenticated();
  userName: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.nameChange.subscribe(() => {
      this.isLogged = this.authService.isAuthenticated();
      this.userName = this.authService.getUserInfo();
    });
  }

}
