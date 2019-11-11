import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  
  inputValue: string;

  constructor(private inputService: InputService) { }

  ngOnInit() {
  }

  onSearchCourseClick(): void {
    this.inputService.setInputValue(this.inputValue);
  }

}
