import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  items: Array<Course>;

  constructor() { }


  ngOnInit() {
    this.items = [new Course('Id1', 'Title1', 'Date1', 'Duration1', 'Description1'),
                      new Course('Id2', 'Title2', 'Date2', 'Duration2', 'Description2'),
                      new Course('Id3', 'Title3', 'Date3', 'Duration3', 'Description3')];
  }

  onDeleted(id: string): void {
    console.log(id);
  }

}
