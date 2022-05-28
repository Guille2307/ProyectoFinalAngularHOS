import { IHero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}
  public getHeroes(): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>(
      'https://heroesofthestorm.herokuapp.com/heroes'
    );
  }
  public addHero(body: IHero): Observable<IHero> {
    return this.httpClient.post<IHero>(
      'https://heroesofthestorm.herokuapp.com/heroes',
      body
    );
  }

  public deleteHero(idHero: string): Observable<IHero> {
    return this.httpClient.delete<IHero>(
      `https://heroesofthestorm.herokuapp.com/heroes/${idHero}`
    );
  }

  public editHero(idHero: string, body: IHero): Observable<IHero> {
    return this.httpClient.put<IHero>(
      `https://heroesofthestorm.herokuapp.com/heroes/${idHero}`,
      body
    );
  }
  public getHeroById(heroId: string): Observable<IHero> {
    return this.httpClient.get<IHero>(
      `https://heroesofthestorm.herokuapp.com/heroes/${heroId}`
    );
  }
}
