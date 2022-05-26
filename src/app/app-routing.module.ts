import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('src/app/pages/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'fields',
    loadChildren: () =>
      import('src/app/pages/fields/fields.module').then((m) => m.FieldsModule),
  },
  {
    path: 'create-fields',
    loadChildren: () =>
      import('src/app/pages/create-fields/create-fields.module').then(
        (m) => m.CreateFieldsModule
      ),
  },
  {
    path: 'create-heroes',
    loadChildren: () =>
      import('src/app/pages/create-heroes/create-heroes.module').then(
        (m) => m.CreateHeroesModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
