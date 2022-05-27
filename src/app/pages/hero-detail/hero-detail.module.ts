import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, HeroDetailRoutingModule, RouterModule],
})
export class HeroDetailModule {}
