import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Course } from '../course';

@Component({
  template: `
  <app-course-item [item]='value' (itemDeleted)='onDeleted($event)'></app-course-item>`
})
class TestHostComponent {
  value = { id: 'IDDDDD', title: 'TestTitle', creationDate: 'TestCreationDate', duration: 'TestDuration', description: 'TestDescription' };
  id;
  onDeleted(i) { this.id = i; }
}

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
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

  it('should pass id to function', () => {
    const comp = new CourseItemComponent();
    const item = new Course('Id2', 'Title2', 'Date2', 'Duration2', 'Description2');
    comp.item = item;

    comp.itemDeleted.subscribe((id) => expect(id).toBe(comp.item.id));
    comp.deleteItem(item.id);
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


