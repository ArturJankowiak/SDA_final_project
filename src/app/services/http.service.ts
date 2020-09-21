import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipes } from '../models/recipes.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private recipes = new BehaviorSubject<Recipes[]>([]);
  private url = '/assets/recipes.json';

  constructor(private http: HttpClient) {
    this.fetchRecipies();
  }

  fetchRecipies(): void {
    this.http
      .get<Recipes[]>(this.url)
      .subscribe((response: Recipes[]) => this.recipes.next(response));
  }

  getRecipes(): Observable<Recipes[]> {
    return this.recipes.asObservable();
  }
}
