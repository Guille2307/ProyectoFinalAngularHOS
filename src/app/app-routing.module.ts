import { AuthGuardGuard } from './core/guards/auth-guard.guard';
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
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'edit-hero/:id',
    loadChildren: () =>
      import('src/app/pages/edit-hero/edit-hero.module').then(
        (m) => m.EditHeroModule
      ),
    canActivate: [AuthGuardGuard],
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
    path: 'logout',
    loadChildren: () =>
      import('src/app/pages/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('src/app/pages/hero-detail/hero-detail.module').then(
        (m) => m.HeroDetailModule
      ),
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
