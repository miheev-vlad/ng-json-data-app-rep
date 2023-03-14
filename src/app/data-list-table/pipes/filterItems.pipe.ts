import { Pipe, PipeTransform } from '@angular/core';
import { DataItemInterface } from '../types/dataItem.interface';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(
    items: DataItemInterface[],
    searchNameStr = '',
    searchBrandNameStr = ''
  ): DataItemInterface[] {
    if (!items) {
      return [];
    }

    if (!searchNameStr.trim() && !searchBrandNameStr.trim()) {
      return items;
    }

    if (!!searchNameStr.trim() && !searchBrandNameStr.trim()) {
      return items.filter(item =>
        item.name.toLowerCase().includes(searchNameStr.toLowerCase())
      );
    }

    if (!searchNameStr.trim() && !!searchBrandNameStr.trim()) {
      return items.filter(item =>
        item.brandName.toLowerCase().includes(searchBrandNameStr.toLowerCase())
      );
    }

    return items.filter(
      item =>
        item.brandName
          .toLowerCase()
          .includes(searchBrandNameStr.toLowerCase()) &&
        item.name.toLowerCase().includes(searchNameStr.toLowerCase())
    );
  }
}
