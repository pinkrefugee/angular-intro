import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../course';
import { InputService } from '../input.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  items: Array<Course> = [];
  inputText: string;
  p: number = 1;

  constructor(private inputService: InputService, private coursesService: CoursesService) { }


  ngOnInit() {
    this.updateCourses();
    this.coursesService.loadMore$.subscribe(
      (data) => {
        data.subscribe(itms => {
          this.items.push(...itms);
        });
      },
      error => console.log(error)
    );
    this.inputService.input$.subscribe(
      (data) => {
        if (!data) {
          this.updateCourses();
        } else {
          this.coursesService.searchCourse(data).subscribe(itms => {
            this.items = itms;
          });
        }
      },
      error => console.log(error)
    );
  }

  onDeleted(id: number): void {
    if (confirm('Sure?')) {
      this.coursesService.deleteCourse(id).subscribe(
        () => {
          this.updateCourses();
          this.p = 1;
        },
        error => console.log(error)
      );
    }
  }

  updateCourses(): void {
    this.coursesService.getItemsList().subscribe(
      (itms) => {
        this.items = [...itms];
      },
      error => console.log(error)
    );
  }

}
