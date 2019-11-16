import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  input$: Observable<any>;
    private inputSubject = new Subject<any>();

    constructor() {
        this.input$ = this.inputSubject.asObservable();
    }

    setInputValue(data) {
        this.inputSubject.next(data);
    }
}
