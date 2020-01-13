import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(value: string) {
        if (!value || !parseInt(value)) return 'mins';
        const duration = +value;
        if (duration < 60) {
            return `${value}mins`;
        }  else {
            return `${Math.floor(duration / 60)}h${duration % 60}min`;
        }

    }
}
