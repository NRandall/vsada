import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  // Filters stores that match the passed region. Excludes the current store so that
  // a store doesn't show in the 'other stores in this region' on its own detail page
  transform(value, region, sender) {
    return value.filter((item) => {
      return item.title[0].value !== sender ? item.field_region[0].value === region : false;
    }); 
  }

// Regions are returned from drupal as numbers representing their associated region -
// 0|Phoenix
// 1|East Valley
// 2|West Valley

}
