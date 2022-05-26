import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CreateHeroesComponent } from './pages/create-heroes/create-heroes.component';
import { CreateFieldsComponent } from './pages/create-fields/create-fields.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FieldsComponent } from './pages/fields/fields.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterModule } from './pages/register/register.module';
import { HomeModule } from './pages/home/home.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { FieldsModule } from './pages/fields/fields.module';
import { CreateFieldsModule } from './pages/create-fields/create-fields.module';
import { CreateHeroesModule } from './pages/create-heroes/create-heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    RegisterModule,
    LoginModule,
    HomeModule,
    HeroesModule,
    FieldsModule,
    CreateFieldsModule,
    CreateHeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
