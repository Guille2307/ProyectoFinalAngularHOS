import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent, HeroComponent],
  imports: [CommonModule, HeroesRoutingModule, FormsModule, SharedModule],
})
export class HeroesModule {}
