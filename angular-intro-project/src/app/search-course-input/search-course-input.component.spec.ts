import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseInputComponent } from './search-course-input.component';

describe('SearchCourseInputComponent', () => {
  let component: SearchCourseInputComponent;
  let fixture: ComponentFixture<SearchCourseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
