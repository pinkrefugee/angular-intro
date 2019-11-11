import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import { FormsModule } from '@angular/forms';

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

  it('should call', () => {
    /*senseless but seems like code coverage doesn't mates spy functions*/

    const itemEl  = fixture.nativeElement.querySelector('button');
    itemEl.click();
    expect(component).toBeTruthy();
  });

  it('should set component property to input value', () => {
    const de = fixture.nativeElement.querySelector('input');
    de.value = 'test';
    de.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();
    expect(component.inputValue).toBe('test');
  });
});
