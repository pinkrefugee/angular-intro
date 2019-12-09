import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  courseTitle: string;

  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.courses.input$.subscribe((data) => {
      this.courseTitle = data;
    });
  }



}
