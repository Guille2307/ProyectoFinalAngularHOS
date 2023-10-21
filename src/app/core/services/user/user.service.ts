import {
  ILogin,
  ILoginResponse,
  IRegister,
  IResgisterResponse,
} from './../models/hero.model';
import { Subject, tap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const url: string = environment.apiUrl;
const ACCESS_TOKEN = 'access_token';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userLogged$: Subject<boolean> = new Subject();
  public currentUser!: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(user: ILogin): Observable<ILoginResponse> {
    return this.httpClient
      .post<ILoginResponse>(`${url}/users/login`, user)
      .pipe(
        tap((res: ILoginResponse) => {
          const user = JSON.stringify({
            token: res.data.token,
            id: res.data.userId,
          });
          this.currentUser = res.data.userId;
          localStorage.setItem(ACCESS_TOKEN, user);
          this.userLogged$.next(true);
          this.router.navigate(['']);
        })
      );
  }
  public register(user: IRegister): Observable<IResgisterResponse> {
    return this.httpClient.post<IResgisterResponse>(
      `${url}/users/register`,
      user
    );
  }
  public logout() {
    let removeToken = localStorage.removeItem(ACCESS_TOKEN);
    this.userLogged$.next(false);
    if (removeToken === null) {
      this.router.navigate(['']);
    }
  }
  public isloggedIn(): boolean {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken !== null;
  }

  public getToken() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.token : null;
  }

  public getUserId() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.id : null;
  }
}
