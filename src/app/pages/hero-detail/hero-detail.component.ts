import { Observable } from 'rxjs';
import { IHero } from './../../core/services/models/hero.model';
import { ApiServiceService } from './../../core/services/Api/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  public currentHero$?: Observable<IHero>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiServiceService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const heroId = params['id'];
      this.currentHero$ = this.apiServiceService.getHeroById(heroId);
    });
  }
}
