import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(value: number) {
        if(!value) return 'mins';
        if (value < 60) {
            return `${value}mins`;
        }  else {
            return `${Math.floor(value / 60)}h${value % 60}min`;
        }

    }
}
