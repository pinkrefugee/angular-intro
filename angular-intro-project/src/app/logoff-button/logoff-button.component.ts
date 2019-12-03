import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff-button',
  templateUrl: './logoff-button.component.html',
  styleUrls: ['./logoff-button.component.css']
})
export class LogoffButtonComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logoff();
    this.router.navigate(['/login']);
  }

}
