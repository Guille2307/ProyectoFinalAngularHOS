import { IHero } from './../../core/services/models/hero.model';
import { Pipe, PipeTransform } from '@angular/core';
import { PaginateService } from './../../core/services/paginate/paginate.service';

const LIMIT_PAGE = 8;
@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  constructor(private paginateService: PaginateService) {}

  transform(value: IHero[], page: number): IHero[] {
    this.paginateService.setMaxPage(Math.ceil(value.length / 8));
    const init = page * LIMIT_PAGE;
    const end = (page + 1) * LIMIT_PAGE;
    return value.slice(init, end);
  }
}
