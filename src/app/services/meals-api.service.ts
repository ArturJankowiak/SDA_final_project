import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meals.interface';


@Injectable({
    providedIn: 'root',
  })
export class MealsApiService {
    private url = './assets/somemeals.json';
    constructor(private http: HttpClient) {
      }

    getMeals(): Observable<Meal[]> {
        return this.http.get<Meal[]>(this.url)
    }
}