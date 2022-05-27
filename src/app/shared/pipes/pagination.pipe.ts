import { IHero } from './../../core/services/models/hero.model';
import { Pipe, PipeTransform } from '@angular/core';

const LIMIT_PAGE = 8;
@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(value: IHero[], page: number): IHero[] {
    const init = page * LIMIT_PAGE;
    const end = (page + 1) * LIMIT_PAGE;
    return value.slice(init, end);
  }
}
