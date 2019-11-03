import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoff-button',
  templateUrl: './logoff-button.component.html',
  styleUrls: ['./logoff-button.component.css']
})
export class LogoffButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogoutClick() {
    console.log('Logged out');
  }

}
