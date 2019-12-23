import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';
import { fromEvent, Subscription } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {

  inputValue: string;
  searchSubscription: Subscription;

  constructor(private inputService: InputService) { }

  ngOnInit() {
    const searchBox = document.querySelector('.search-course-input');
    const search$ = fromEvent(searchBox as HTMLInputElement, 'keyup').pipe(
      map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value),
      filter(text => text.length > 3),
      debounceTime(1000)
    );
    this.searchSubscription = search$.subscribe(val => this.inputService.setInputValue(val));
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
