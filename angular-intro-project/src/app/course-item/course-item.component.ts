import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  constructor() { }
  @Input() item: Course;
  @Output() itemDeleted = new EventEmitter<number>();

  ngOnInit() {
  }

  deleteItem(id: number): void {
    this.itemDeleted.emit(id);
  }

}
