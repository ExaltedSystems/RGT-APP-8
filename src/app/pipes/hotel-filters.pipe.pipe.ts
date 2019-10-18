import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilters'
})
export class HotelFiltersPipe implements PipeTransform {

  transform(items: any[], types: string[]): any[] {
    if (!types || types.length === 0) return items;
    return items.filter(item => types.includes(item.prperty_name));
  }
}