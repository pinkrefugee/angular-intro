import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  readonly DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  items: Array<Course>;

  constructor() { }


  ngOnInit() {
    this.items = [new Course('Id1', 'Title1', 'Date1', 'Duration1', this.DESCRIPTION),
    new Course('Id2', 'Title2', 'Date2', 'Duration2', this.DESCRIPTION),
    new Course('Id3', 'Title3', 'Date3', 'Duration3', this.DESCRIPTION)];
  }

  onDeleted(id: string): void {
    console.log(id);
  }

}
