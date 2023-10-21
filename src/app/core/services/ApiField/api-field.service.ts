import { IField } from './../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url: string = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiFieldService {
  constructor(private httoClient: HttpClient) {}
  public getFields(): Observable<IField[]> {
    return this.httoClient.get<IField[]>(`${url}/battlefields/play/:play`);
  }
}
