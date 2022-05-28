import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginateService {
  public maxPages$: Subject<number> = new Subject();
  public setMaxPage(page: number) {
    this.maxPages$.next(page);
  }
}
