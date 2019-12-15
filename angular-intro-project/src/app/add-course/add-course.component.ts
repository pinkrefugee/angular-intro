import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Course } from '../course';

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

  constructor(private route: ActivatedRoute, private router: Router, private courses: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        this.courses.getItemByID(this.id).subscribe((item) => {
          this.course = item;
          this.populateCourseData(this.course);
          this.courses.updateCrumbs(this.courseTitle);
        });
      }
    });
  }

  populateCourseData(courseItem) {
    this.courseTitle = courseItem.name;
    this.courseDescription = courseItem.description;
    this.courseDate = courseItem.date;
    this.courseDuration = courseItem.length;
  }

  createCourse() {
    if (this.id) {
      this.courses.updateCourse(this.course, this.id, this.courseTitle, this.courseDescription, this.courseDate, this.courseDuration).subscribe(
        () => {
          this.router.navigate(['/courses']);
        },
        error => console.log(error)
      );
    } else {
      this.courses.createCourse(this.courseTitle, this.courseDescription, this.courseDate, this.courseDuration).subscribe(
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
    this.courses.updateCrumbs(null);
  }

}
