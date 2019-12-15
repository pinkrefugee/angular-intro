import { localEnvironment } from './environment';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseItems: Array<Course> = [];
  input$: Observable<any>;
  loadMore$: Observable<Course[]>;
  latestCourseNumber = 0;
  coursesPerChunk = 10;
  private inputSubject = new Subject<any>();
  private loadSubject = new Subject<any>();

  constructor(private httpClient: HttpClient, private overlayService: OverlayService) {
    this.input$ = this.inputSubject.asObservable();
    this.loadMore$ = this.loadSubject.asObservable();
  }
  updateCrumbs(id) {
    this.inputSubject.next(id);
  }

  getItemsList() {
    this.overlayService.showSpinner();
    this.latestCourseNumber = 0;
    this.coursesPerChunk = 10;
    return this.httpClient.get<Course[]>(`${localEnvironment}/courses?start=${this.latestCourseNumber}&count=${this.coursesPerChunk}`);
  }

  loadNextChunk() {
    this.overlayService.showSpinner();
    this.latestCourseNumber += this.coursesPerChunk;
    this.loadSubject.next(this.httpClient.get<Course[]>(`${localEnvironment}/courses?start=${this.latestCourseNumber}&count=${this.coursesPerChunk}`));
  }

  searchCourse(text) {
    this.overlayService.showSpinner();
    return this.httpClient.get<Course[]>(`${localEnvironment}/courses?textFragment=${text}`);
  }

  deleteCourse(id) {
    return this.httpClient.delete<Course>(`${localEnvironment}/courses/${id}`);
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
    return this.httpClient.post<Course>(`${localEnvironment}/courses`, body);
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
    return this.httpClient.patch<Course>(`${localEnvironment}/courses/${id}`, body);
  }

  getItemByID(id: number) {
    return this.httpClient.get<Course>(`${localEnvironment}/courses/${id}`);
  }
}
