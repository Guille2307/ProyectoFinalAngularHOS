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
}
