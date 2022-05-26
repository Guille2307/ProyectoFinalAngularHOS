import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroesComponent } from './create-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: CreateHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateHeroesRoutingModule {}
