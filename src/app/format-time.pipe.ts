import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var date = new Date(value);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return `(${hours}:${minutes})`;
  }

}
