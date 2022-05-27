import { IHero } from './../../core/services/models/hero.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IHero[], criteria: string): IHero[] {
    return value.filter((hero) => {
      return hero.character
        .toLowerCase()
        .includes(criteria.toLocaleLowerCase());
    });
  }
}
