import { IHero } from './../../../core/services/models/hero.model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() public hero?: IHero;
  constructor() {}

  ngOnInit(): void {}
}
