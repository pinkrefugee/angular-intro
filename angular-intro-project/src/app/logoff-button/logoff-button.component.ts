import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logoff-button',
  templateUrl: './logoff-button.component.html',
  styleUrls: ['./logoff-button.component.css']
})
export class LogoffButtonComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logoff();
  }

}
