import { Component, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,
DoCheck,
OnChanges,
AfterContentInit, 
AfterContentChecked, 
AfterViewChecked, 
AfterViewInit {
  
  title = 'angular-intro-project';

  ngOnInit() {    
    console.log(`ngOnInit`);
  }
  ngOnChanges() {
    console.log(`OnChanges`);
  }
  ngDoCheck() {
    console.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }
}

