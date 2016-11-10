import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

  transform(value, term, region, tag) {
    return value.filter((item) => {
      return term !== '' ? item.name.toLowerCase().includes(term.toLowerCase()) : tag ? item.tags.includes(tag) : region ? item.region.toLowerCase() === region.toLowerCase() : true;
    }); 
  }
}
