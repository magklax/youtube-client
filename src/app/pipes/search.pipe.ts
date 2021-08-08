import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    return value.filter((data: any) => {
      return JSON.stringify(data).toLowerCase().includes(args.toLowerCase());
    });
  }
}
