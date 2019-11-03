import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
  <app-course-item [item]='value' (itemDeleted)='onDeleted($event)'></app-course-item>`
})
class TestHostComponent {
  value = { id: 'IDDDDD', title: 'TestTitle', creationDate: 'TestCreationDate', duration: 'TestDuration', description: 'TestDescription' };
  onDeleted(i) { this.id = i };
  id;
}

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  // let fixture: ComponentFixture<CourseItemComponent>;
  let fixture;
  let testHost;
  let itemEl;
  let expectedItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture  = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    itemEl   = fixture.nativeElement.querySelector('.delete-button');
    fixture.detectChanges();
  });

  it('should set id to TestHost component', () => {
    itemEl.click();
    expect(testHost.id).toBe(testHost.value.id);
  });


  it('should reflect title in component h3 tag', () => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    const itemDe = fixture.debugElement.query(By.css('h3'));
    itemEl = itemDe.nativeElement;

    expectedItem = {
      id: 'TestId',
      title: 'TestTitle',
      creationDate: 'TestCreationDate',
      duration: 'TestDuration',
      description: 'TestDescription'
    };
    component.item = expectedItem;
    fixture.detectChanges();
    expect(itemEl.textContent).toEqual(expectedItem.title);
  });
});


