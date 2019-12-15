import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Course } from './course';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseItems: Array<Course> = [];
  input$: Observable<any>;
  loadMore$: Observable<any>;
  latestCourseNumber = 0;
  coursesPerChunk = 10;
  private inputSubject = new Subject<any>();
  private loadSubject = new Subject<any>();

  constructor(private httpClient: HttpClient) {
    this.input$ = this.inputSubject.asObservable();
    this.loadMore$ = this.loadSubject.asObservable();
  }
  updateCrumbs(id) {
    this.inputSubject.next(id);
  }

  getItemsList() {
    this.latestCourseNumber = 0;
    this.coursesPerChunk = 10;
    return this.httpClient.get<Course[]>(`http://localhost:3004/courses?start=${this.latestCourseNumber}&count=${this.coursesPerChunk}`);
  }

  loadNextChunk() {
    this.latestCourseNumber += this.coursesPerChunk;
    this.loadSubject.next(this.httpClient.get<Course[]>(`http://localhost:3004/courses?start=${this.latestCourseNumber}&count=${this.coursesPerChunk}`));
  }

  searchCourse(text) {
    return this.httpClient.get<Course[]>(`http://localhost:3004/courses?textFragment=${text}`);
  }

  deleteCourse(id) {
    return this.httpClient.delete<Course>(`http://localhost:3004/courses/${id}`);
  }

  createCourse(title, description, date, duration) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const body = {
      id,
      name: title,
      date,
      length: duration,
      description,
      authors: {
        id: 1000,
        name: 'Sam',
      },
      isTopRated: false
    };
    return this.httpClient.post<Course>('http://localhost:3004/courses', body);
  }

  updateCourse(course, id, title, description, date, duration) {
    const body = {
      id,
      name: title,
      date,
      length: duration,
      description,
      authors: course.authors,
      isTopRated: course.isToprated
    };
    return this.httpClient.patch<Course>(`http://localhost:3004/courses/${id}`, body);
  }

  getItemByID(id: number) {
    return this.httpClient.get<Course>(`http://localhost:3004/courses/${id}`);
  }
}
