import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Course } from '../course';
import { mergeMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { getCourse } from '../add-course.actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseTitle: string;
  courseDescription: string;
  courseDate: number;
  courseDuration: number;
  id: number;
  course: Course;

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService, private store: Store<{ addCourse: Course }>) {
    store.pipe(select('addCourse')).subscribe(val => {
      this.course = val;
    });
  }

  ngOnInit() {
    this.route.params.pipe(mergeMap(params => {
      this.id = +params.id;
      if (this.id) {
        return this.coursesService.getItemByID(this.id);
      }
    })).subscribe((item) => {
      this.store.dispatch(getCourse({ course: item }));
      this.populateCourseData(this.course);
      this.coursesService.updateCrumbs(this.courseTitle);
    },
      error => console.error(error));
  }

  populateCourseData(courseItem) {
    this.courseTitle = courseItem.name;
    this.courseDescription = courseItem.description;
    this.courseDate = courseItem.date;
    this.courseDuration = courseItem.length;
  }

  createCourse() {
    if (this.id) {
      this.coursesService.updateCourse(this.course, this.id, this.courseTitle, this.courseDescription, this.courseDate, this.courseDuration).subscribe(
        () => {
          this.router.navigate(['/courses']);
        },
        error => console.log(error)
      );
    } else {
      this.coursesService.createCourse(this.courseTitle, this.courseDescription, this.courseDate, this.courseDuration).subscribe(
        () => {
          this.router.navigate(['/courses']);
        },
        error => console.log(error)
      );
    }
  }

  cancelClick() {
    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.coursesService.updateCrumbs(null);
  }

}
