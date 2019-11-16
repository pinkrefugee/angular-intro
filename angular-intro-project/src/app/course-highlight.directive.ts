import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {

  @Input('appCourseHighlight') date: Date;

  constructor(private elem: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    this.setStyle(this.date);
  }

  setStyle(courseDate: Date) {
    const creationMonth = courseDate.getUTCMonth() + 1;
    const creationDay = courseDate.getUTCDate() + 1;
    const currentDate = new Date();
    const currentMonth = currentDate.getUTCMonth() + 1;
    const currentDay = currentDate.getUTCDate();
    if (creationMonth * 30 + creationDay < currentMonth * 30 + currentDay &&
      creationMonth * 30 + creationDay >= currentMonth * 30 + currentDay - 14) {
      this.renderer.setStyle(this.elem.nativeElement, 'border', '1px solid green');
    }

    if (creationMonth * 30 + creationDay > currentMonth * 30 + currentDay) {
      this.renderer.setStyle(this.elem.nativeElement, 'border', '1px solid DodgerBlue');
    }

  }

}
