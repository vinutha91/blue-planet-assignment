import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: string): string {
    return (new Date(value)).toISOString();
  }
}
