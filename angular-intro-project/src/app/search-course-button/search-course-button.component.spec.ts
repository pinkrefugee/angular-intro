import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseButtonComponent } from './search-course-button.component';

describe('SearchCourseButtonComponent', () => {
  let component: SearchCourseButtonComponent;
  let fixture: ComponentFixture<SearchCourseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
