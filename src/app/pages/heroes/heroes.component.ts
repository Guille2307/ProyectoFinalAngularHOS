import { PaginateService } from './../../core/services/paginate/paginate.service';
import { ApiServiceService } from 'src/app/core/services/Api/api-service.service';
import { IHero } from './../../core/services/models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes?: IHero[];
  public filterValue: string = '';
  public page: number = 0;
  public maxPages: number = 0;

  constructor(
    private apiServiceService: ApiServiceService,
    private paginateService: PaginateService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.paginateService.maxPages$.subscribe((page) => {
      this.maxPages = page;
    });
  }

  private getHeroes() {
    this.apiServiceService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.heroes;
    });
  }

  private onEdit() {}
}
