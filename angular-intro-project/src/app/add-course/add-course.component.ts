import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Course } from '../course';
import { mergeMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { getCourse } from '../add-course.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  addForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl('31/12/1992'),
    duration: new FormControl('123')
  });

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
    this.addForm.controls['title'].setValue(courseItem.name);
    this.addForm.controls['description'].setValue(courseItem.description);
    this.courseDate = courseItem.date;
    this.courseDuration = courseItem.length;
  }

  createCourse() {
    if (this.id) {
      this.coursesService.updateCourse(this.course, this.id, this.addForm.get('title').value, this.addForm.get('description').value, this.addForm.get('date').value, this.addForm.get('duration').value).subscribe(
        () => {
          this.router.navigate(['/courses']);
        },
        error => console.log(error)
      );
    } else {
      this.coursesService.createCourse(this.addForm.get('title').value, this.addForm.get('description').value, this.addForm.get('date').value, this.addForm.get('duration').value).subscribe(
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
