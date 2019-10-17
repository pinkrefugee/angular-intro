import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor() { }
  items: Array<string> = ['item1', 'item2', 'item3'];

  ngOnInit() {
  }

}
