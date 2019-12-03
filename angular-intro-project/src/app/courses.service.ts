import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  readonly DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
  courseItems: Array<Course> = [{id: 1, title: 'Title1', creationDate: new Date('2019, 12, 9'), duration: 120, description: this.DESCRIPTION, topRated: false},
    {id: 2, title: 'Title2', creationDate: new Date('2019, 11, 9'), duration: 130, description: this.DESCRIPTION, topRated: false},
    {id: 3, title: 'Title3', creationDate: new Date('2019, 8, 9'), duration: 59, description: this.DESCRIPTION, topRated: true}];
    input$: Observable<any>;
    private inputSubject = new Subject<any>();

    constructor() {
      this.input$ = this.inputSubject.asObservable();
    }
    updateCrumbs(id) {
      this.inputSubject.next(id);
    }

  getItemsList(): Array<Course> {
    return this.courseItems;
  }

  createCourse(title, description, date, duration, id?) {
    

  }
  getItemByID(id: number): Course {
    return this.courseItems.filter(item => item.id === id)[0];
  }
  updateIten() {}

  removeItem(courseId: number) {
    const index = this.courseItems.findIndex(item => item.id === courseId);
    this.courseItems.splice(index, 1);
  }
}
