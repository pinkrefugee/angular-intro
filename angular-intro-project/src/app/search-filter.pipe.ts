import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'filter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Array<Course>, searchText: string): Array<Course> {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }
}
