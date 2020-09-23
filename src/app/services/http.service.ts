import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipes } from '../models/recipes.interface';

const headers = {
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  "x-rapidapi-key": "d99ee01fe9msh0ce862ab1a79fb2p1635a5jsnebc67ecb3135"
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private recipes = new BehaviorSubject<Recipes[]>([]);
  private url = '/assets/recipes.json';
  private urlApi = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F";

  constructor(private http: HttpClient) {
    this.fetchRecipies();
  }

  fetchRecipies(): void {
    this.http
      .get<Recipes[]>(this.urlApi, {headers})
      .subscribe((response: Recipes[]) => this.recipes.next(response));
  }

  getRecipes(): Observable<Recipes[]> {
    return this.recipes.asObservable();
  }
}
