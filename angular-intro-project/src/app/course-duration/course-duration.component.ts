import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true,
    }
  ]
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor {
  @Input() courseDuration: string;
  private data: string;
  private propagateChange = (_: any) => { };


  constructor() { }

  ngOnInit() {
    if (!this.courseDuration) {
      this.courseDuration = '';
    }
  }

  ngOnChanges(chngs) {
    if (chngs.courseDuration && chngs.courseDuration.currentValue) {
      this.data = chngs.courseDuration.currentValue;
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
    this.data = event.target.value;
    this.propagateChange(this.data);
  }

  public validate(c: FormControl) {
    return (this.data && Number.parseInt(this.data, 10)) ? null : {
        custom: 'false',
  };
}

}


