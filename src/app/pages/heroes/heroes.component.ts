import { ApiServiceService } from 'src/app/core/services/Api/api-service.service';
import { IHero } from './../../core/services/models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public filteredHeroes?: IHero[];
  public heroes?: IHero[];
  public filterValue: string = '';

  constructor(private apiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public onFilter() {
    this.filteredHeroes = this.heroes?.filter((hero) => {
      return hero.character
        .toLowerCase()
        .includes(this.filterValue.toLocaleLowerCase());
    });
  }
  private getHeroes() {
    this.apiServiceService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.filteredHeroes = heroes;
    });
  }
}
