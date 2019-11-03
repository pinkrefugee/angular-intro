import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSectionComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const de = fixture.nativeElement.querySelector('input');
    de.value = 'test';
    de.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    expect(component.inputValue).toBe('test');
  });
});
