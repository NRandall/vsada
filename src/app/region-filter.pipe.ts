import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  transform(value, region, sender) {
    return value.filter((item) => {
      return item.name !== sender ? item.region.toLowerCase() === region.toLowerCase() : false;
    }); 
  }

}
