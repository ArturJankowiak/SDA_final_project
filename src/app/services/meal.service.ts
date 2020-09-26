import { Meal } from './../models/meals.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class MealService {
    private meals = new BehaviorSubject<Meal[]>([]);
    


      getMeals(): Observable<Meal[]> {
        return this.meals.asObservable();
      }
    }
