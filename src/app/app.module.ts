import { SharedModule } from './shared/shared.module';
import { HeroDetailModule } from './pages/hero-detail/hero-detail.module';
import { LoginModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';
import { HomeModule } from './pages/home/home.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { FieldsModule } from './pages/fields/fields.module';
import { CreateFieldsModule } from './pages/create-fields/create-fields.module';
import { CreateHeroesModule } from './pages/create-heroes/create-heroes.module';
import { HttpClientModule } from '@angular/common/http';
import { EditHeroModule } from './pages/edit-hero/edit-hero.module';
import { LogoutModule } from './pages/logout/logout.module';

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
    HttpClientModule,
    HeroDetailModule,
    SharedModule,
    EditHeroModule,
    LogoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
