import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  // Filters stores that match the passed region. Excludes the current store so that
  // a store doesn't show in the 'other stores in this region' on its own detail page
  transform(value, region, sender) {
    return value.filter((item) => {
      return item.name !== sender ? item.region.toLowerCase() === region.toLowerCase() : false;
    }); 
  }

}
