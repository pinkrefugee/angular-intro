import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  constructor() { }
  @Input() item: Course;
  @Output() itemDeleted = new EventEmitter<string>();

  ngOnInit() {
  }

  deleteItem(id: string): void {
    this.itemDeleted.emit(id);
  }

}
