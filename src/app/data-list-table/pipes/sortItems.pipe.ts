import { Pipe, PipeTransform } from '@angular/core';
import { DataItemInterface } from '../types/dataItem.interface';

@Pipe({
  name: 'sortItems',
})
export class SortItemsPipe implements PipeTransform {
  transform(items: DataItemInterface[], sortedByStr = ''): DataItemInterface[] {
    if (!items) {
      return [];
    }

    if (!sortedByStr) {
      return items;
    }

    if (sortedByStr.includes('_up')) {
      return items.sort((a, b) =>
        a[sortedByStr.slice(0, -3)] > b[sortedByStr.slice(0, -3)] ? 1 : -1
      );
    } else {
      return items.sort((a, b) =>
        a[sortedByStr.slice(0, -3)] > b[sortedByStr.slice(0, -3)] ? -1 : 1
      );
    }
  }
}
