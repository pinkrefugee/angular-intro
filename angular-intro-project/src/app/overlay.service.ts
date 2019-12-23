import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  spinner$: Observable<any>;
  private spinnerSubject = new Subject<any>();

  constructor() {
    this.spinner$ = this.spinnerSubject.asObservable();
  }

  showSpinner() {
    this.spinnerSubject.next(true);
  }

  hideSpinner() {
    this.spinnerSubject.next(false);
  }
}
