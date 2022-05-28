import { CreateHeroesComponent } from './create-heroes.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroesRoutingModule } from './create-heroes-routing.module';

@NgModule({
  declarations: [CreateHeroesComponent],
  imports: [CommonModule, CreateHeroesRoutingModule, SharedModule],
})
export class CreateHeroesModule {}
