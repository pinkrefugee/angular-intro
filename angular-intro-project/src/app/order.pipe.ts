import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "order"
})
export class ArrayOrderPipe  implements PipeTransform {
  transform(array: any): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => +a.creationDate - +b.creationDate);
    return array;
  }
}