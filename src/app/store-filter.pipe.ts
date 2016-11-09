import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

  transform(value, [term, tag, region]) {
    return value.filter((item) => term ? item.name.includes(term) : tag ? item.tags.includes(tag) : region ? item.region.toLowerCase() === region : true);
  }

}
