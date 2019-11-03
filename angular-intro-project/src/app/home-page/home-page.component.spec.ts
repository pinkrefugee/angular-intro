import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { SearchSectionComponent } from '../search-section/search-section.component';
import { AddCourseButtonComponent } from '../add-course-button/add-course-button.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { CourseItemComponent } from '../course-item/course-item.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, SearchSectionComponent, AddCourseButtonComponent,
          CoursesListComponent, LoadMoreComponent, CourseItemComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
