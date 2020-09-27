import { MealsApiService } from './../../services/meals-api.service';
import { Observable } from 'rxjs';
import { Meal } from './../../models/meals.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  meals: Observable<Meal[]>
  constructor(private mealsApi: MealsApiService) { }

  ngOnInit(): void {
    this.meals = this.mealsApi.getMeals();
  }


  }


