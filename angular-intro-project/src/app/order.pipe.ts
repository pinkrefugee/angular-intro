import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'order'
})
export class ArrayOrderPipe  implements PipeTransform {
  transform(array: Array<Course>): Array<Course> {
    if (!array) {
      return;
    }
    array.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return array;
  }
}
