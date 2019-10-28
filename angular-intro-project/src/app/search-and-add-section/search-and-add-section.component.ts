import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-add-section',
  templateUrl: './search-and-add-section.component.html',
  styleUrls: ['./search-and-add-section.component.css']
})
export class SearchAndAddSectionComponent implements OnInit {
  
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchCourseClick(): void {
    console.log(this.inputValue);
  }

}
