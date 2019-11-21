import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { InputService } from '../input.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  items: Array<Course>;
  inputText: string;

  constructor(private inputService: InputService, private coursesService: CoursesService) {}


  ngOnInit() {
    this.items = this.coursesService.getItemsList();
    this.inputService.input$.subscribe((data) => {
      this.inputText = data;
    });
  }

  onDeleted(id: number): void {
    if (confirm('Sure?')) {
      this.coursesService.removeItem(id);
      this.items = this.coursesService.getItemsList();
    }
  }

}
