import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-course-input',
  templateUrl: './search-course-input.component.html',
  styleUrls: ['./search-course-input.component.css']
})
export class SearchCourseInputComponent implements OnInit {

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchCourseClick() {
    console.log(this.inputValue);
  }

}
