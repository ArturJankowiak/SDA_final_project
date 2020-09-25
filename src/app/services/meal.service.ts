import { Meals } from './../models/meals.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class MealService {
    private meals = new BehaviorSubject<Meals[]>([]);
    private url = './assets/somemeals.json';

    constructor(private http: HttpClient) {
        this.fetchMeals();
      }

      fetchMeals(): void {
        this.http.get<Meals[]>(this.url)
          .subscribe((response: Meals[]) => this.meals.next(response));
      }

      getMeals(): Observable<Meals[]> {
        return this.meals.asObservable();
      }
    }
