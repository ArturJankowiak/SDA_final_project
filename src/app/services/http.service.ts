// import { Meals } from './../models/meals.interface';
// import { HttpService } from 'src/app/services/http.service';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// const headers = {
// 		// "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		// "x-rapidapi-key": "d99ee01fe9msh0ce862ab1a79fb2p1635a5jsnebc67ecb3135"
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "d99ee01fe9msh0ce862ab1a79fb2p1635a5jsnebc67ecb3135"
// 	}

// @Injectable({
//   providedIn: 'root',
// })
// export class HttpService {
//   private meals = new BehaviorSubject<Meals[]>([]);
//   private urlApi = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%252C%20gluten&number=10&offset=0&type=main%20course&query=burger";

//   constructor(private http: HttpClient) {
//     this.fetchMeals();
//   }

//   fetchMeals(): void {
//     this.http.get<Meals[]>(this.urlApi, {headers})
//       .subscribe((response: Meals[]) => this.meals.next(response));
//   }

//   getMeals(): Observable<Meals[]> {
//     return this.meals.asObservable();
//   }
// }
