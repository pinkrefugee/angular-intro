import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchCourseClick(): void {
    console.log(this.inputValue);
  }

}
