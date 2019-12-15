import { Component, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OverlayService } from './overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spinnerFlag: boolean;
  title = 'angular-intro-project';

  constructor(private overlayService: OverlayService, private cd: ChangeDetectorRef) {

  }
  ngOnInit() {
    this.overlayService.spinner$.subscribe(val => {
      this.spinnerFlag = val;
      this.cd.detectChanges();
    });
  }
}

