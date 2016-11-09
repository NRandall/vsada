import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

  transform(value, [term]) {
    return value.filter((item) => term ? item.name.includes(term) : true);
  }

}
