import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffButtonComponent } from './logoff-button.component';

describe('LogoffButtonComponent', () => {
  let component: LogoffButtonComponent;
  let fixture: ComponentFixture<LogoffButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoffButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoffButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
