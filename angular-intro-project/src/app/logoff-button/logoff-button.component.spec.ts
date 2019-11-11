import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffButtonComponent } from './logoff-button.component';
import { By } from '@angular/platform-browser';

describe('LogoffButtonComponent', () => {
  let component: LogoffButtonComponent;
  let fixture: ComponentFixture<LogoffButtonComponent>;
  let el;

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

  it('should call function onLogoutClick', () => {
    spyOn(component, 'onLogoutClick');
    el = fixture.debugElement.query(By.css('img')).nativeElement;
    el.click();
    expect(component.onLogoutClick).toHaveBeenCalled();
  });
});
