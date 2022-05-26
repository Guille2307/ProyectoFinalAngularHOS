import { IField } from './../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFieldService {
  constructor(private httoClient: HttpClient) {}
  public getFields(): Observable<IField[]> {
    return this.httoClient.get<IField[]>(
      'https://heroesofthestorm.herokuapp.com/battlefields/play/:play'
    );
  }
}
