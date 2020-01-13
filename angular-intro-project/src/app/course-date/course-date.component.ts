import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true,
    }
  ]
})
export class CourseDateComponent implements OnInit, ControlValueAccessor {
  @Input() courseDate: string;
  private data: string;
  private propagateChange = (_: any) => { };


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(chngs) {
    if (chngs.courseDate && chngs.courseDate.currentValue) {
      this.data = chngs.courseDate.currentValue;
      this.propagateChange(this.data);
    }
  }

  writeValue(val) {
    this.data = val;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  onChange(event) {
    this.data = event.target.value.replace(/\//g, '-');
    this.propagateChange(this.data);
  }

  public validate(c: FormControl) {
    return this.checkDate(this.data) ? null : {
      custom: 'false',
    };
  }

  checkDate(value) {
    const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (value.match(reg)) {
      return true;
    }
    return false;
  }
}
