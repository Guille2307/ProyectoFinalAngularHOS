import { ApiServiceService } from './../../core/services/Api/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from 'src/app/core/services/models/hero.model';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss'],
})
export class EditHeroComponent implements OnInit {
  public hero?: IHero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiServiceService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const heroId = params['id'];
      this.apiServiceService.getHeroById(heroId).subscribe((hero) => {
        this.hero = hero;
      });
    });
  }
}
