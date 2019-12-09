import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private courses: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        const course = this.courses.getItemByID(this.id);
        this.populateCourseData(course);
        this.courses.updateCrumbs(this.courseTitle);
      }
   });
   
  }

  populateCourseData(courseItem) {
    this.courseTitle = courseItem.title;
    this.courseDescription = courseItem.description;
    this.courseDate = courseItem.creationDate;
    this.courseDuration = courseItem.duration;
  }

  
  createCourse() {
    this.courses.createCourse(this.courseTitle, this.courseDescription, this.courseDate, this.courseDuration, this.id);
    this.router.navigate(['/courses']);
  }

  cancelClick() {
    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.courses.updateCrumbs(null);
  }

}
