import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndAddSectionComponent } from './search-and-add-section.component';

describe('SearchAndAddSectionComponent', () => {
  let component: SearchAndAddSectionComponent;
  let fixture: ComponentFixture<SearchAndAddSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndAddSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
