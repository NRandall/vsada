import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {
  regions: any = {
    'phoenix': 0,
    'east-valley': 1,
    'west-valley': 2
  }
  // Filters stores by passed term, region, or tag.
  // Used to filter the shop list component by terms passed by the navbar -> Storesservice 
  transform(value, term, region, tag) {
    return value.filter((item) => {
      return term !== '' ? item.title[0].value.toLowerCase().includes(term.toLowerCase()) :
         tag ? item.field_specialties.filter(spec=>spec.value==tag.toLowerCase()).length > 0 :
          region ? +item.field_region[0].value === this.regions[region.toLowerCase()] :
           true;
    }); 
  }
}
