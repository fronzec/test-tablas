import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPeople'
})

@Injectable()
export class FilterpeoplePipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    // debugger
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(filter));
  }
}
