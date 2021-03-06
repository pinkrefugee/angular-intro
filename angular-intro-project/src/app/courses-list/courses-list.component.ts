import { OverlayService } from './../overlay.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { InputService } from '../input.service';
import { CoursesService } from '../courses.service';
import { mergeMap, delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { updateCourses, loadMoreCourses } from '../courses.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  items: Array<Course> = [];
  inputText: string;
  pageNumber = 1;
  loadMoreSubscription: Subscription;
  searchCourseSubscription: Subscription;

  constructor(private inputService: InputService, private coursesService: CoursesService, private overlayService: OverlayService, private store: Store<{ courses: Course[] }>) {
    store.pipe(select('courses')).subscribe(val => {
      this.items = val;
    });
   }


  ngOnInit() {
    this.updateCourses();
    this.loadMoreSubscription = this.coursesService.loadMore$.pipe(delay(2000), mergeMap(data => data)).subscribe(itms => {
      this.overlayService.hideSpinner();
      this.store.dispatch(loadMoreCourses({ courseItems: itms }));
    });

    this.searchCourseSubscription = this.inputService.input$.pipe(mergeMap(data => {
      if (!data) {
        this.updateCourses();
      } else {
        return this.coursesService.searchCourse(data);
      }
    })).subscribe(itms => {
        this.overlayService.hideSpinner();
        this.items = itms;
    },
    error => console.error(error));
  }

  onDeleted(id: number): void {
    if (confirm('Sure?')) {
      this.overlayService.showSpinner();
      this.coursesService.deleteCourse(id).pipe(delay(3000)).subscribe(
        () => {
          this.overlayService.hideSpinner();
          this.updateCourses();
          this.pageNumber = 1;
        },
        error => console.log(error)
      );
    }
  }

  updateCourses(): void {
    this.coursesService.getItemsList().pipe(delay(2000)).subscribe(
      (itms) => {
        this.store.dispatch(updateCourses({ courseItems: itms }));
        this.overlayService.hideSpinner();
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.loadMoreSubscription.unsubscribe();
    this.searchCourseSubscription.unsubscribe();
  }

}
