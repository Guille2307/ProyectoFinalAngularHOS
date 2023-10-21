import { IHero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url: string = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}
  public getHeroes(): Observable<any> {
    return this.httpClient.get<any>(`${url}/heroes`);
  }
  public addHero(body: IHero): Observable<IHero> {
    return this.httpClient.post<IHero>(`${url}/heroes`, body);
  }

  public deleteHero(idHero: string): Observable<IHero> {
    return this.httpClient.delete<IHero>(`${url}/heroes/${idHero}`);
  }

  public editHero(idHero: string, body: IHero): Observable<IHero> {
    return this.httpClient.put<IHero>(`${url}/heroes/${idHero}`, body);
  }
  public getHeroById(idHero: string): Observable<IHero> {
    return this.httpClient.get<IHero>(`${url}/heroes/${idHero}`);
  }
  public getUser() {
    return this.httpClient.get(`${url}/users/users`);
  }
}
